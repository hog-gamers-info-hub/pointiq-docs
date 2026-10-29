# Enter Results Manually

Manual result entry happens in the PointIQ Android app. The website does not store or calculate match results; use this page to follow the manual workflow in the app.

Use manual entry when screenshots are unavailable, automatic review needs too many corrections, or you already have the final placements and kills. Manual entry does not require the screenshot workflow, but the match must still have the correct tournament and team context before it can be finalized.

## Open manual entry

1. Open an editable match's `Match Review` screen.
2. When the screen has no displayable result OCR data, tap `Enter Results Manually` in the manual-entry section.
3. If calculated rows are already displayed, correct them in the review fields instead. To start over from a draft calculation, use `Clear Result` when it is available, then open `Enter Results Manually`.

The current active screen uses `Enter Results Manually`. Do not rely on older documentation that refers to a separate `Manual Calculate` button.

## Enter the result values

1. For each participating team, enter a valid placement in `Corrected placement` and the team’s kills in `Corrected kills`.
2. Assign each row to the correct `Assigned team slot`. Use the `Remaining Team Slots` or `Remaining slots` choices when they are shown.
3. Check that placements are valid, unique, and within the match’s supported placement range. Kills must be whole, non-negative numbers.
4. Check that each assigned team slot is valid and is used only once. Restore missing team names in `Enter Teams` before finalizing.
5. If a row should not be included, open its row menu and use `Delete Team`. Use `Add Team` when you need to restore a row that was excluded.
6. Use `Reset row correction` to discard one row’s edits or `Reset all corrections` to discard the correction draft.

Manual rows do not have OCR evidence to confirm the values. Treat every required field as a value you must verify yourself. A missing, invalid, duplicate, or incomplete value appears as a blocker or warning and must be resolved before finalization.

## Add a bonus or penalty

1. Open the row menu and tap `Bonus / Penalty`.
2. In `Adjust Team Points`, select the `Team`.
3. Enter the signed value in `Point Adjustment`.
4. Tap `Apply`.

The row then shows a `Points adjustment: +N` or `Points adjustment: -N` indicator when an adjustment is present. Review the sign and value before finalizing.

## Switch between manual and automatic entry

- To leave the manual panel, tap `Back` and return to the match details.
- To restart from screenshots, use `Clear Result` when it is available, then tap `Auto Calculate` and follow [Auto-calculate Results](/guide/auto-calculate).
- To move from automatic review to manual values, use the correction fields shown in the result review. If you need a fresh manual draft, clear the current result first and choose `Enter Results Manually`.

For the checks required before saving a final result, continue with [Review and Finalize](/guide/review-finalize).

## Troubleshooting

- `Enter Results Manually` is not shown: the match may already have displayable calculated data, may not be editable, or may already be finalized. Edit the displayed rows, use `Clear Result` on a draft, or return to an editable draft match.
- A value is rejected: check the placement range, duplicate placements, non-negative whole-number kills, and duplicate team-slot assignments.
- A team name is missing: open `Enter Teams`, restore the name for the affected slot, save it, and return to the match review.
- Finalization is disabled: open [Review and Finalize](/guide/review-finalize) and resolve every blocker shown by the app.

