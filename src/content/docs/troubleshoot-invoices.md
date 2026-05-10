---
title: "Invoice issues"
description: "How to fix common Servogo invoice problems: missing drafts, wrong amounts, undelivered emails, and payment not recording."
section: "Troubleshooting"
order: 29
relatedPages:
  - label: "Invoices"
    url: "/docs/invoices"
  - label: "Invoice settings"
    url: "/docs/settings-invoice"
---

## Visit completed but no invoice

Check Settings → Invoice Settings. If you're on **Rolling per client**, the visit is appended to that client's open draft - look in the Draft tab. If you're on **Monthly batch**, drafts are created at month end.

## Wrong amount on the invoice

The line item price comes from the service plan's price. If you changed the price recently, only future visits use the new price. Edit the line item directly on the draft, or void and re-issue.

## Client says they didn't get the email

- Check the client's email address on their profile.
- Look at the message log on the invoice - it shows whether send succeeded or bounced.
- Ask them to check spam. Sender is `noreply@servogo.co.uk` by default.
- Use **Resend** to try again.

## Payment received but invoice still outstanding

Online card payments mark themselves automatically. For bank transfer or cash, mark the invoice paid manually on the invoice detail page.
