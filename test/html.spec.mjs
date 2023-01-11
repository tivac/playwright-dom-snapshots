import { getHTML, cleanHTML } from "../src/html.mjs";

import { test, expect } from "./fixture.mjs";

test.describe("HTML", () => {
    test("should get cleaned HTML", async ({ page }) => {
        const html = await getHTML(page.locator(".foo"));

        expect(html).toMatchSnapshot();
    });

    test("should clean up HTML", async ({ page }) => {
        const result = cleanHTML(`
            <div class="foo" data-other="bar">asdf</div>
        `);

        expect(result).toMatchSnapshot();
    });
});