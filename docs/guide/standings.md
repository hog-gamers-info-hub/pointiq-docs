# View Standings

These steps happen in the PointIQ Android app. The website only provides this guide; it does not calculate or update tournament results.

## Open tournament standings

1. Open the tournament in the Android app.
2. On **Tournament Details**, tap **View Overall Standings**.
3. The **Overall Standing** screen opens. Its subtitle is **Finalized matches only**.

To inspect one match instead of the tournament total, tap that match from **Tournament Details** to open **Match Review**. For the review workflow, see [Review and finalize a match](/guide/review-finalize).

## Which matches are included

Only matches with finalized results are included. Draft or otherwise unfinalized matches do not change the standings.

If no match has been finalized, the screen shows **No finalized matches yet** and **Finalize a match to see tournament standings.** After you finalize a match in **Match Review**, return to **Overall Standing** to see the updated tournament totals.

Finalized matches are read-only in Match Review. Correct the result before finalizing it; see [Review and finalize a match](/guide/review-finalize).

## What each row shows

Each standing row shows a rank badge and the team name. If a saved team name is blank, PointIQ displays **Team slot - N** for that slot.

The row metrics are:

- **Total Pts** — the team’s cumulative total points from finalized matches, including any saved point adjustments.
- **Position Pts** — cumulative position points.
- **Kills** — the cumulative kill metric from the finalized results.
- **Wins** — the number of first-place finishes.
- **Latest** — the team’s placement in its latest included finalized match, or an em dash when there is no placement.
- **Matches** — the number of finalized matches in which the team participated.

Saved team slots can remain visible even when a team did not participate in a finalized match. Such a row can have zero points and zero included matches.

## Ranking and tie-breaking order

PointIQ ranks teams in this exact order:

1. **Total Pts**, highest first.
2. **Kills**, highest first, when Total Pts are equal.
3. **Wins**, highest first, when the earlier values are equal.
4. **Position Pts**, highest first, when the earlier values are equal.
5. **Team Slot** order, lowest slot number first, only to keep a complete tie in a stable display order.

**Latest** and **Matches** are displayed statistics. They do not break a ranking tie.

When Total Pts, Kills, Wins, and Position Pts are all equal, PointIQ shows **Complete tie; displayed in Team Slot order.** Team Slot order in this message is a display order, not an additional competitive scoring rule.

## Bonus and penalty adjustments

In **Match Review**, a user can use **Bonus / Penalty** and the **Point Adjustment** field to apply a positive or negative adjustment to a team. The adjustment changes that finalized result’s **Total Pts** and can therefore change the tournament ranking. It does not change the displayed Position Pts, Kills, Wins, or placement values.

For the downloadable result image, see [Export results](/guide/export-results). To understand how a result becomes finalized, see [Review and finalize a match](/guide/review-finalize).
