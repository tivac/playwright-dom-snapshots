import { test, expect } from "@playwright/test";

const override = test.extend({
	// Override page to load
	async page({ page }, use) {
		await page.goto(`/`);

		await use(page);
	},
});

export {
	override as test,
	expect,
};
