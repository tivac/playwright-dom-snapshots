import { test, expect } from "./fixture.mjs";

test.describe("toMatchHTMLSnapshots", () => {
    test("should compare locator against a snapshot (deep)", async ({ page }) => {
        await expect(page.locator(".foo")).toMatchHTMLSnapshot();
    });

    test("should compare locator against a snapshot (shallow)", async ({ page }) => {
        await expect(page.locator(".foo")).toMatchHTMLSnapshot({ deep : false });
    });
});

