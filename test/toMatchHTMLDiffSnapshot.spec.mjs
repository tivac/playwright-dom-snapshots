import { getHTML } from "../src/html.mjs";

import { test, expect } from "./fixture.mjs";

test.describe("toMatchHTMLDiffSnapshots", () => {
    test("should compare diff against a snapshot", async ({ page }) => {
        const locator = page.locator(".foo-grandchild");

        const initial = await getHTML(locator);

        await locator.evaluate((n) => {
            n.dataset.tested = "tested";
        });

        const after = await getHTML(locator);

        expect(initial).toMatchHTMLDiffSnapshot(after);
    });
});

