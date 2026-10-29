# Add Screenshots

Open a draft match's `Match Review` screen to add its lobby and result screenshots. If you have not created a match yet, follow [Create a Tournament](/guide/create-tournament) first.

## Add lobby screenshots

1. On `Match Review`, tap `Add Lobby Screenshots`.
2. Add screenshots taken after all players have joined. Keep player names and team slots clearly visible.
3. Use the available `Select Screenshot` actions to fill the lobby screenshot slots. PointIQ supports up to three lobby screenshots for a match.
4. Select a PNG, JPEG, or WebP image. PointIQ validates the image and preserves the selected local copy.
5. Review the crop. If automatic cropping does not keep the needed content, open `Crop Lobby Screenshot` and adjust it so the relevant lobby area remains visible. Exclude chat, overlays, and unrelated content.
6. Tap `Confirm Crop` for a new crop or `Update Crop` when changing an existing crop.

To manage an existing lobby screenshot, select its slot and use `Replace`, `Crop`, or `Remove`. `Replace` adds a new image to that slot, so review its crop again when PointIQ prompts you. `Remove` clears the screenshot from the current match; you can add another screenshot to the slot while the match is still a draft.

If the lobby details will remain accurate for the next matches, tap `Save Lobby` when that action is available. Reuse a saved lobby only when its team and player details still match the new match.

## Add result screenshots

1. On `Match Review`, tap `Add Result Screenshots`.
2. Use result screenshot slot 1 for the main result image containing the complete upper result rows. Crop it to the useful result area and avoid the cut-off Team 11 where possible.
3. Use result screenshot slot 2 for the continuation image containing the complete Team 11 and Team 12 rows.
4. If automatic cropping does not keep the needed content, open `Crop Result Screenshot 1` or `Crop Result Screenshot 2` and adjust the crop.
5. Tap `Confirm crop` for a new crop or `Update crop` when editing an existing crop.

For an existing result screenshot, use `Replace`, `Crop` or `Edit crop`, and `Remove` as needed. Keep only the relevant result area and exclude chat, overlays, and unrelated content.

## Image limits and storage

- Lobby screenshots have three available slots. Result screenshots use two roles: the main upper-result screenshot and the continuation screenshot for Team 11 and Team 12.
- PointIQ accepts PNG, JPEG, and WebP images. The Android image validator rejects an image wider or taller than 8,192 pixels, or an image with more than 16,000,000 total pixels.
- PointIQ's active screenshot workflow is local-first. After validation, the app preserves the selected image and its crop information in local app storage, and Match Review uses that local copy. The app also has a separate private cloud upload and recovery path for preserved assets. If that upload fails, the local copy is kept.
- A screenshot can be replaced or removed from a draft match through its screenshot controls. Screenshot changes are not available after a match is finalized; finalized matches are read-only for these screenshot operations.

The Android source inspected for this guide does not define a user-facing cloud retention period, storage quota, or byte-size upload limit. Those details are therefore not specified here.

When your screenshots are ready, continue with [Auto-calculate Results](/guide/auto-calculate).
