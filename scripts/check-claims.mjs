#!/usr/bin/env node
/**
 * Marketing claim gate.
 *
 * Every marketing claim that maps to a product capability is tagged in the
 * `.astro` source with `data-claim="<key>"` (space-separate multiple keys).
 * This script collects those keys and checks each one exists in the app's
 * shipped-feature manifest. If the app removes a feature from the manifest, the
 * next marketing deploy fails here until the page copy is updated.
 *
 * Manifest resolution order:
 *   1. MARKETING_MANIFEST_URL env (or the default app URL) - fetched, authoritative.
 *   2. Local committed copy at ./marketing-manifest.json - offline fallback.
 *
 * Exit codes: 0 = all claims valid, 1 = unknown claim(s) or no manifest.
 */
import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PAGES_DIR = join(ROOT, 'src', 'pages')
const LOCAL_MANIFEST = join(ROOT, 'marketing-manifest.json')
const DEFAULT_URL = 'https://app.servogo.co.uk/marketing-manifest.json'

const CLAIM_RE = /data-claim=["']([^"']+)["']/g

async function loadManifest() {
  const url = process.env.MARKETING_MANIFEST_URL || DEFAULT_URL
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    return { source: url, features: json.features || {} }
  } catch (err) {
    // Network unavailable (local dev / offline). Fall back to the committed copy.
    try {
      const json = JSON.parse(await readFile(LOCAL_MANIFEST, 'utf8'))
      console.warn(`! Could not fetch manifest from ${url} (${err.message}). Using local copy.`)
      return { source: relative(ROOT, LOCAL_MANIFEST), features: json.features || {} }
    } catch {
      console.error(`✗ No manifest available. Fetch failed (${err.message}) and no local ${relative(ROOT, LOCAL_MANIFEST)}.`)
      process.exit(1)
    }
  }
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (entry.isFile() && full.endsWith('.astro')) yield full
  }
}

async function collectClaims() {
  const claims = new Map() // key -> [files]
  for await (const file of walk(PAGES_DIR)) {
    const text = await readFile(file, 'utf8')
    for (const match of text.matchAll(CLAIM_RE)) {
      for (const key of match[1].split(/\s+/).filter(Boolean)) {
        if (!claims.has(key)) claims.set(key, [])
        const rel = relative(ROOT, file)
        if (!claims.get(key).includes(rel)) claims.get(key).push(rel)
      }
    }
  }
  return claims
}

const { source, features } = await loadManifest()
const claims = await collectClaims()

const unknown = [...claims.keys()].filter((key) => !(key in features)).sort()

if (claims.size === 0) {
  console.warn('! No data-claim attributes found in src/pages. Claim gate is a no-op.')
}

if (unknown.length > 0) {
  console.error(`\n✗ Claim gate failed: ${unknown.length} claim(s) reference features not in the manifest (${source}).\n`)
  for (const key of unknown) {
    console.error(`  - "${key}"  (in ${claims.get(key).join(', ')})`)
  }
  console.error('\nEither the feature was removed from the app, or the key is a typo. Update the page copy or the manifest.\n')
  process.exit(1)
}

console.log(`✓ Claim gate passed: ${claims.size} claim key(s) checked against ${Object.keys(features).length} shipped features (${source}).`)
