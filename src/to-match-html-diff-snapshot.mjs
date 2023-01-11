import { diffStringsUnified } from "jest-diff";
import { expect } from "@playwright/test";

const noColor = (v) => v;

expect.extend({
	async toMatchHTMLDiffSnapshot(first, second, args = false) {
		if(typeof first !== "string" || typeof second !== "string") {
			return {
				pass : false,
				message : () => `html values must be strings`,
			};
		}

		let difference = diffStringsUnified(first, second, {
			includeChangeCounts : false,
			omitAnnotationLines : true,
			contextLines : 5,

			// Disable colors
			// https://www.npmjs.com/package/jest-diff#user-content-example-of-options-for-no-colors
			aColor : noColor,
			bColor : noColor,
			changeColor : noColor,
			commonColor : noColor,
			patchColor : noColor,
		});

		// Remove patchmark details because they don't matter to us
		difference = difference.replace(
			/^@@ -[0-9]+,[0-9]+ \+[0-9]+,[0-9]+ @@$/gm,
			"@@ --- --- @@"
		);

		expect(difference).toMatchSnapshot(args);

		return {
			pass : true,
		};
	},
});
