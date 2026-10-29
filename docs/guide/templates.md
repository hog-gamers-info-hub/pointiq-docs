# Use Result Templates

These operations happen inside the PointIQ Android app. The website does not apply templates or generate result images.

## Choose a free template

1. Open **Download Result** from **Download Results** on **Tournament Details**, or from **Download Result** in a finalized **Match Review**.
2. Choose **Overall** or a **Match N** in the **Result** section.
3. In **Design**, choose **Free Design**.
4. In the **Template** section, tap a template thumbnail.
5. Check the refreshed preview, then tap **Download** when it is ready.

The current build provides these free templates, in picker order:

1. **Gold** (the default template)
2. **Blue Neon**
3. **Black Gold**
4. **Orange Blaze**
5. **Purple Luxe**
6. **Crimson Edge**
7. **Steel Phantom**
8. **Redline Shadow**

Changing the template changes the preview and the design used for the downloaded PNG result. For the complete download flow, see [Export results](/guide/export-results).

### Group Rotation limitation

For a Group Rotation tournament with **Overall** selected, the active screen does not offer **Free Design**. Use **Image** for that overall result, or select a specific **Match N** if you need a free design for one match.

## Add details to Image or Free Design previews

When an **Image** or **Free Design** preview is visible, tap its settings control to open **Point Table Details**. You can:

- enter an organisation name;
- choose a date;
- add an organisation logo;
- **Edit**, **Replace**, or **Remove** a saved logo; and
- apply the changes.

The current **My Design** preview does not show this settings control.

## Create My Design

1. On **Download Result**, choose the result scope you want to support and select **My Design**.
2. If no saved design is available, tap **Import Your Design**.
3. Choose an image with the Android image picker. PointIQ opens the **Import Your Design** screen.
4. In **Set up columns**, enter each column heading exactly as it appears in the source design.
5. Complete the required headings:
   - **Team Name**
   - **Win**
   - **Total Kills**
   - **Position Points**
   - **Total Points**
6. If the design includes a match-count column, enter it in **Matches (Optional)**.
7. Adjust the column and row guides on the image preview so the result values align with the design.
8. Tap each text-color swatch to choose a color. You can select a preset color or use **Custom HEX**, enter a value in **HEX**, and tap **Apply**.
9. When the image, headings, and grid are valid, tap **Save**.
10. When **Custom Design Saved** appears, tap **OK**. Return to **Download Result**, select **My Design**, check the preview, and tap **Download**.

The **Save** action remains unavailable until the selected image, required headings, and editable grid are valid. The app uses the saved column labels and positions to place result values into the imported design.

## Select, replace, or delete My Design

- To use a saved design, select **My Design** on **Download Result**. The app restores the saved design and previews it for the selected result.
- To remove it, use the delete control on the saved **My Design** preview and confirm **Delete custom design?** with **Delete**. The app then returns to **Import Your Design**.
- If the preview reports **Saved design has X rows, but this result requires Y.**, tap **Delete saved design** and import a design with a matching row layout.

The current active setup exposes deletion and re-import rather than an in-place edit action for a saved design. To use a different design, delete the saved one and import it again.

For scope selection, PNG saving, and download troubleshooting, see [Export results](/guide/export-results). For the tournament totals represented in an exported image, see [View standings](/guide/standings).
