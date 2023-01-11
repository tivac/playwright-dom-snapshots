# playwright-dom-snapshots

DOM snapshotting matchers & utilities for playwright

## Install

```bash
$ npm install playwright-dom-snapshots -D
```

## Usage

Import this package from your `playwright.config.mjs` file, the matchers will automatically be added.

```
// playwright.config.mjs

import "playwright-dom-snapshots";

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    // ...
};
```

You can also access just the HTML utilities by importing them from `playwright-dom-snapshots/html`

```
import { cleanHTML, getHTML } from "playwright-dom-snapshots/html";
```

## API

### Matchers

#### `.toMatchHTMLSnapshot(locator, [{ deep : true, name }])`

Use this matcher to compare a playwright [locator](https://playwright.dev/docs/locators) against a saved snapshot.

By passing `{ deep : false }` as the second param you can limit the comparison to just the node the locator matches, excluding its children and helping to keep your snapshot smaller.

The `name` option will be passed to the underlying [`.toMatchSnapshot()` playwright matcher](https://playwright.dev/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1) in case you want to provide a custom filename for the match.

#### `.toMatchHTMLDiffSnapshot(first, second, [{ name }])`

Use this matcher to compare two strings against each other using `jest-diff`, then compare the result against a saved snapshot.

The `name` option will be passed to the underlying [`.toMatchSnapshot()` playwright matcher](https://playwright.dev/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1) in case you want to provide a custom filename for the match.

### HTML Utilities

#### `async getHTML(locator, [{ deep : true }])`

Gets the contents of the locator, runs them through [`cleanHTML()`](#cleanhtml), and returns a promise that resolves to the result.

If you set `deep : false` instead of returning the HTML for the matching element and it's chilren the result will be the HTML for just the element itself.

#### `cleanHTML(html)`

Returns a trimmed-up and reformatted version of the input HTML. Uses [`diffable-html`](https://www.npmjs.com/package/diffable-html) to format.

