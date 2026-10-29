# Auto-calculate Results

Automatic calculation happens in the PointIQ Android app. The website does not calculate results or process screenshots; use this page as a guide to the Android workflow.

Use `Auto Calculate` when you have a result screenshot and want PointIQ to read the result rows and use available lobby evidence for team matching. Always review the calculated values before finalizing.

## Before you start

1. Open an editable match and go to `Match Review`.
2. Enter and save the team names in the tournament before calculating. PointIQ cannot calculate a match with missing or out-of-order team names.
3. Add the lobby and result screenshots described in [Add Screenshots](/guide/add-screenshots). Confirm their crops before calculating.

A result screenshot is required to start automatic calculation. PointIQ processes the two result screenshot roles and available lobby evidence. If some evidence is missing, the app can let you continue with the available data, but the missing information may require manual correction.

## Start automatic calculation

1. On `Match Review`, tap `Auto Calculate`.
2. If no result screenshot is selected, the `Missing Screenshots` dialog opens. Tap `Add Result Screenshots`, add a result image, and return to `Match Review`.
3. If the dialog lists a missing image, unavailable local image, unconfirmed crop, or screenshot that is still processing, use the listed `Select`, `Replace`, or `Crop` action. Wait for processing to finish when the dialog says it is still processing.
4. When the app allows you to continue, tap `Calculate Points`.
5. Wait while the app shows `Calculating Results`.

If the app allows calculation with incomplete evidence, continue. Do not treat an incomplete run as final: use the review fields to supply any missing values.

## Understand the calculated review

The result review shows the values PointIQ has available for each result row, including placement, kills, team name, and assigned team slot. Depending on the available evidence, a row can also show:

- `Suggested slot`, `Top suggestions`, confidence, and assignment safety information for team matching.
- `Warnings` or `Blockers` when a value needs attention.
- `Not detected`, `Not matched`, or `Unavailable` when the app has no usable evidence for a field.
- A safety summary showing rows that are safe, need review, or require manual entry.

Review every row. OCR output and team suggestions are evidence for review, not a final confirmation. To correct values, follow [Review and Finalize](/guide/review-finalize). If you need to enter the whole result yourself, use [Enter Results Manually](/guide/manual-results).

## Troubleshooting

- `Missing Screenshots` appears: add at least one result screenshot, then confirm its crop.
- A screenshot is not available locally: select or replace that screenshot again from `Match Review`.
- A crop is required: open the matching `Crop Lobby Screenshot` or `Crop Result Screenshot` action and confirm the crop.
- Processing is still running: wait until processing finishes before tapping `Calculate Points`.
- The review contains blockers or unavailable values: correct the rows manually before using [Finalize Result](/guide/review-finalize).
- You do not have usable result evidence: use `Enter Results Manually` from the editable `Match Review` screen.

