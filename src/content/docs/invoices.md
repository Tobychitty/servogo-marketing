---
title: "Invoices"
description: "How to generate, send, and track invoices in Servogo. Auto-generate from completed visits or create manually with Stripe payment links."
section: "Daily workflows"
order: 11
relatedPages:
  - label: "Invoice settings"
    url: "/docs/settings-invoice"
  - label: "Invoice issues"
    url: "/docs/troubleshoot-invoices"
---

Invoices are how you get paid. Servogo can generate them automatically from completed visits, or you can create them by hand.

## The queue

The Invoices view has tabs for **Draft**, **Outstanding**, **Paid**, and **Overdue**. Use the grouping toggle to group by client or month.

## Generating from visits

When a visit is marked complete, Servogo creates a draft invoice (or appends to an open one for that client, depending on your billing preferences in Settings → Invoice Settings). Open the draft, review the line items, and send.

## Manual invoices

Invoices → **New invoice**. Pick the client, add line items by hand, set the due date, and save or send.

## Sending

**Send** emails the client a PDF and a Stripe payment link. The invoice moves to Outstanding. You can resend at any time.

## Marking paid

If the client pays via the Stripe link, payment is recorded automatically. For cash or bank transfer, click **Mark paid** on the invoice and choose the payment method and date.

## PDF download

Every invoice has a **Download PDF** action. Useful for accounting exports or printing.

## Editing a sent invoice

Sent invoices are locked from edits to keep the record clean. To change one, void it (creates a credit note) and issue a new invoice.
