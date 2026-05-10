---
title: "Routes and optimisation"
description: "How Servogo's route optimiser works, manual stop ordering, home start and return, and day length stats."
section: "Concepts"
order: 24
relatedPages:
  - label: "Day View"
    url: "/docs/day-view"
---

Routing is how Servogo decides the order to do today's stops. You can order them manually or let the planner optimise.

## The optimiser

Servogo uses straight-line distance (haversine) between stops to approximate the shortest tour, anchored on your home address. This is fast and good enough for typical daily routes. It is not a traffic-aware routing engine - for last-mile precision, hand off to Apple or Google Maps from the stop detail.

## Manual ordering

Drag any stop in the timeline. Times recompute live. If you optimise afterwards, the planner replaces your manual order - but you can always drag back.

## Home start and home return

Two independent toggles in the Day View toolbar. **Home start** anchors the first leg from your home address. **Home return** adds a return leg back home after the last stop. Turn both off if a tech is starting and ending elsewhere.

## Day length stats

The stats row shows total drive time, total on-site time, and total day length. Use it to spot days that are too long, and to plan capacity.
