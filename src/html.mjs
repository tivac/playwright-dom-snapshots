import diffableHTML from "diffable-html";
import dedent from "dedent";

const cleanHTML = (html) => diffableHTML(dedent(html))
.trim()
// Consistent line-endings are important
.replace(/\n/g, "\r\n")
// The .replace removes some playwright locator gunk that slips in otherwise
.replace(/\r?\n^\s*__playwright_target__.+$/m, "");

const getHTML = async (locator, { deep = true } = false) => {
	if(typeof locator === "string") {
		return cleanHTML(locator);
	}

	const raw = await locator.evaluate((node, d) => {
		const tgt = d ? node : node.cloneNode();

		return tgt.outerHTML;
	}, deep);

	return cleanHTML(raw);
};

export {
	getHTML,
	cleanHTML,
};
