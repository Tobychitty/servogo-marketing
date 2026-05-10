---
title: "Importing existing clients"
description: "How to import your client list into Servogo via CSV, including direct migration from Squeegee."
section: "Getting started"
order: 5
relatedPages:
  - label: "Switching from Squeegee to Servogo"
    url: "/squeegee-alternative"
  - label: "CSV import errors"
    url: "/docs/troubleshoot-csv"
---

You can add clients one at a time, or bring an existing list in via CSV. The import handles most common formats - including direct exports from Squeegee.

## Single client

Clients → **New client**. The required fields are name and address. Phone and email are optional but make messaging easier later.

## CSV import

1. Clients → **Import**.
2. Drop in your CSV file. The first row should be headers.
3. The smart importer attempts to match your columns to Servogo fields (name, address, postcode, phone, email, frequency, price). Confirm or adjust the mapping.
4. Review the preview. Rows with errors are flagged - fix them in your CSV and re-upload, or skip them.
5. Click **Import**. Clients appear in your directory immediately.

### Squeegee migration

If you're moving from Squeegee, export your customer list as CSV from Squeegee. The importer recognises Squeegee's column names and will auto-map most fields, including the recurrence pattern and price. Service plans are created alongside clients in the same import.

### Common errors

- **Address didn't geocode** - the planner needs valid coordinates. Edit the address after import to add a postcode.
- **Duplicate client** - Servogo flags rows that look like an existing client. You can merge or skip.
- **Missing required field** - at minimum, every row needs a name and an address.

> **Tip:** Run a small import (10-20 rows) first to check the mapping before bringing in your full list.
