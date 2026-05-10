---
title: "Route and schedule issues"
description: "How to fix common Servogo route problems: techs missing routes, stops not on the map, and wrong arrival times."
section: "Troubleshooting"
order: 30
relatedPages:
  - label: "Day View"
    url: "/docs/day-view"
  - label: "Routes and optimisation"
    url: "/docs/concepts-routing"
---

## Tech can't see today's route

- Check that the tech has jobs assigned to them today (Day View → switch to that tech).
- Check that the tech accepted their invitation - pending invites appear under Settings → Personnel.
- Have them sign out and back in - pulls a fresh token.

## Stop is on the route but not on the map

The address didn't geocode. Open the client and re-save the address with a valid postcode. The pin will appear next time the route loads.

## Optimisation produces a weird order

The optimiser uses straight-line distance, which can produce surprising orders if stops are spread across geographic obstacles (rivers, motorways). Drag manually for those days; your order is saved.

## Times are wrong

Check the day's start time and the service durations. Drive times are estimated from straight-line distance and a configurable speed average - if your area has heavy traffic, increase the buffer in Settings → Preferences.
