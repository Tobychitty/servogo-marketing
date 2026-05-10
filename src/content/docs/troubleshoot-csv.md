---
title: "CSV import errors"
description: "How to fix common CSV import errors in Servogo: geocoding failures, duplicates, missing fields, and frequency format."
section: "Troubleshooting"
order: 28
relatedPages:
  - label: "Importing existing clients"
    url: "/docs/import-clients"
---

## "Address didn't geocode"

The planner needs to convert addresses into latitude/longitude. If an address is too vague (no postcode, abbreviated street name) the geocoder gives up. Fix the address in your CSV (always include the postcode) and re-import, or import then edit each row.

## "Possible duplicate"

Servogo flags rows where a client with the same name and address already exists. Choose **Skip** to ignore, or **Merge** to update the existing record.

## "Invalid frequency"

Frequency strings need to look like `4w` (every 4 weeks), `monthly`, or `biweekly`. The Squeegee importer recognises Squeegee's format too.

## "Missing required field"

Every row needs at minimum a **name** and an **address**. Phone, email, frequency, and price are recommended but optional.

## Import succeeded but service plans didn't appear

Service plans are only created when frequency and price are both present on the row. If they were missing, the client was created without a plan - add the plan from Schedule.
