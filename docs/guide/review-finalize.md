# Review and Finalize Results

Review and finalization happen in the PointIQ Android app. The website does not edit match rows or finalize matches.

Use this workflow after [Auto-calculate Results](/guide/auto-calculate) or [Enter Results Manually](/guide/manual-results). A match should be finalized only after you have checked every result row.

## Review the result

1. Open the match's `Match Review` screen.
2. Check each participating team’s placement, kills, team name, and assigned team slot.
3. For automatic results, review `Suggested slot`, safety, confidence, `Warnings`, and `Blockers`. Evidence can be unavailable or require manual review.
4. For manual results, verify every value yourself because the rows do not have OCR evidence.
5. If the app shows a valid/issues status, resolve the issues before continuing.

## Correct result rows

1. Edit `Corrected placement`, `Corrected kills`, or `Assigned team slot` for the row that needs attention.
2. Keep placements valid and unique, use whole non-negative kill counts, and assign valid team slots without duplicates.
3. Use `Remaining Team Slots` or `Remaining slots` to find an unassigned slot.
4. Open a row menu to use `Delete Team`, `Add Team`, or `Bonus / Penalty`.
5. Use `Reset row correction` to restore one row or `Reset all corrections` to discard all correction edits.

In Group Rotation pair-relative modes, team-slot identity can be display-only, so the `Assigned team slot` field may not be editable for every row. Follow the identity shown by the app instead of forcing a different slot.

## Apply a bonus or penalty

1. Open the row menu and tap `Bonus / Penalty`.
2. In `Adjust Team Points`, choose the `Team` and enter the signed `Point Adjustment`.
3. Tap `Apply`, then check the `Points adjustment: +N` or `Points adjustment: -N` indicator on the row.

## Finalize a draft match

1. Make sure the team names are entered and saved in `Enter Teams`.
2. Resolve every blocker. Typical blockers include missing or invalid placement, duplicate placement, missing or invalid kills, negative kills, missing or duplicate team-slot assignment, and an invalid result row.
3. On the editable result review, tap `Finalize Result`.
4. In the `Finalize match?` dialog, read the warning and tap `Finalize`.
5. If the app shows `Finalize with warnings?`, confirm only after reviewing every warning row and the related evidence.

Only draft matches can be finalized. A finalized match is shown as `Finalized Result · Read-only`; its saved results can still be reviewed, and `Download Result` remains available. Finalized matches cannot use the normal screenshot link, replace, or crop actions, and their result rows are not editable in the normal review screen.

Finalized matches are the records used for tournament standings. See [View Standings](/guide/standings) after finalization.

## If finalization is disabled

- `Fix before finalizing` or `Resolve all validation issues before finalizing` means one or more blockers remain. Open the affected rows and correct them.
- If the app says team slots have no names, return to `Enter Teams`, restore and save those names, and return to `Match Review`.
- If a warning confirmation appears, review the warning rows before choosing `Finalize`.
- If screenshot processing is still running, wait for it to finish. If a draft screenshot is unavailable, replace or crop it as described in [Add Screenshots](/guide/add-screenshots), or use [Enter Results Manually](/guide/manual-results) when the app offers that path.

## Previously finalized results with unavailable screenshots

If a finalized match opens but its lobby and result screenshot files are unavailable, PointIQ still restores the saved finalized result rows from the match data. The screen remains read-only and can show `Unavailable` for screenshot-derived evidence such as player names or confidence. You cannot use the missing files to recalculate the finalized match or change its screenshot crops from the normal review screen.

This is different from a draft match: a draft with missing result evidence may need a screenshot before `Auto Calculate` can start, or may need manual entry. For draft screenshot steps, see [Add Screenshots](/guide/add-screenshots).

