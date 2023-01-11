import { expect } from "@playwright/test";

import { getHTML } from "./html.mjs";

expect.extend({
	async toMatchHTMLSnapshot(locator = false, args = false) {
		if(!locator) {
			return {
				pass : false,
				message : () => `Must pass a locator to .toMatchHTMLSnapshot()`,
			};
		}

		const {
			deep = true,
		} = args;

		const dom = await getHTML(locator, { deep });

		expect(dom).toMatchSnapshot(args);

		return {
			pass : true,
		};
	},
});