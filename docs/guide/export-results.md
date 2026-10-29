# Export Results

These steps happen in the PointIQ Android app. The website does not process tournament data or create result files.

## Open Download Result

You can open the active download screen in either of these ways:

1. From **Tournament Details**, tap **Download Results**. The **Download Result** screen opens with **Overall** selected.
2. From **Match Review** for a finalized match, tap **Download Result**. The screen opens with that match selected.

## Choose the result scope

In the **Result** section, choose one of these options:

- **Overall** — the tournament-wide result image.
- **Match N** — the result for one match. Standard tournaments use the saved match number. Group Rotation tournaments show match numbers within the selected pairing.

For a Group Rotation tournament, first use the **Pairing** section to choose **All Pairings** or a specific pairing. The available **Match N** choices then follow that pairing.

The preview must be available before **Download** is enabled. A pairing-wide Overall preview can show **Pairing Overall is not available yet.** when that aggregate is not available.

## Choose a design

In the **Design** section, choose:

- **Image** — PointIQ’s standard result image.
- **Free Design** — a built-in template. The **Template** section appears below the preview.
- **My Design** — a saved custom design.

For free templates and custom designs, see [Use result templates](/guide/templates).

## Download the result

1. Select the result scope and design.
2. Check the preview.
3. If you selected **Free Design**, choose a template and check the refreshed preview.
4. Tap **Download**.
5. Wait while the app shows **Generating result.** and **Saving result.**

The active Download Result workflow produces PNG image files. On Android 10 and later, PointIQ saves the file to **Downloads/PointIQ**. On older Android versions, the app asks you to choose a save destination.

## Optional image details

For **Image** and **Free Design** previews, use the settings control on the preview to open **Point Table Details**. The current controls let you set an organisation name, choose a date, and add an organisation logo. A saved logo can then use **Edit**, **Replace**, or **Remove** before you apply the changes.

These preview details are separate from the result values. The **My Design** preview does not expose this settings control.

## Current format and integration limits

- The current visible **Download Result** screen saves PNG images. It does not present a user-selectable PDF option.
- No Google Sheets or direct spreadsheet export is exposed by the current Android workflow.
- The Android source contains older or lower-level PDF and CSV export code, but the current navigation does not expose those controls. This guide describes only the active Download Result path.

## Troubleshooting

### Download is disabled or the preview is unavailable

The app enables **Download** only when it has a generated preview. Check that:

1. The selected match is finalized.
2. The tournament contains finalized match data for an **Overall** result.
3. Team names needed by the result are present in **Enter Teams**.

If the app shows **Cannot Download Result**, restore the missing team names in **Enter Teams** and return to the download screen. If it shows **The finalized match is not valid for download.**, review the match and its finalized data in **Match Review**.

### A custom design does not fit this result

If the preview says **Saved design has X rows, but this result requires Y.**, the saved design’s row capacity does not match the selected result. Use **Delete saved design**, then import a design with the required row layout. The complete setup is described in [Use result templates](/guide/templates).

For tournament-wide ranking details, see [View standings](/guide/standings).
