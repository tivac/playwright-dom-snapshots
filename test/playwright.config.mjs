import "../src/index.mjs";

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer : {
		command : "npm start",
		url : "http://127.0.0.1:5173/",
		timeout : 30 * 1000,
	},

    use : {
        baseURL : "http://127.0.0.1:5173",
    },

    snapshotPathTemplate : "{testDir}/{testFileDir}/__snapshots__/{arg}{ext}",
};

export default config;