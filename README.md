# rmtrailing

Removes dynamic trailing substring

## 🧭 Table of contents

- [✨ Benefits](#-benefits)
- [🎒 Requierments](#-requierments)
- [🚀 Quickstart](#-quickstart)
- [📘 Documentation](#-documentation)
- [🆘 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [🧪 Testing](#-testing)
- [⚖️ License](#️-license)

## ✨ Benefits

- [x] Improved readability compared to regex
- [x] Matches user input strings (unknown at time of coding)

## 🎒 Requierments

No requierments, just works.

## 🚀 Quickstart

### Install

#### NodeJS

Install using the terminal:

```cli
npm install @danielcobo/rmtrailing
```

Require the module:

```js
const rmtrailing = require('@danielcobo/rmtrailing');
```

<sub>**Note:** In case you're wondering, **@danielcobo/** is just a [namespace scope](https://docs.npmjs.com/about-scopes/) - an NPM feature. Scopes make it easier to name modules and improve [security](https://github.blog/2021-02-12-avoiding-npm-substitution-attacks/).</sub>

#### Browser

Declare it as a global variable named rmtrailing by including this script before any script you want to use it in:

```html
<script src="https://cdn.jsdelivr.net/npm/@danielcobo/rmtrailing@1/dist/iife/rmtrailing.min.js"></script>
```

Or import it as an [ECMAScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import):

```js
import * as rmtrailing from 'https://cdn.jsdelivr.net/npm/@danielcobo/rmtrailing@1/dist/esm/rmtrailing.min.js';
```

Also, feel free to download the file if you prefer not to use [jsdelivr](https://www.jsdelivr.com). In that case just replace the url with the relative file path.

### Example use

```js
const slash = '/';

rmTrailing('hello/world/', slash); //'hello/world',
rmTrailing('hello/world//', slash); //'hello/world'
rmTrailing('hello/world', slash) //'hello/world'
rmTrailing('///', slash); //''
rmTrailing('', slash) //''
```

For details see documentation below.

## 📘 Documentation

### rmtrailing()
Remove trailing substring

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | `string` |  | Input string |
| substr | `string` |  | Leading string to remove |
| [flag] | `boolean` | false | True/false for case insensitive |

#### Returns
| Type | Description |
| ---- | ----------- |
| `string` | Input string without the leading substring |

<sub>**Source:** [src/index.js:1](https://github.com/danielcobo/rmtrailing/blob/master/src/index.js?plain=1#L1)</sub>

## 🆘 Troubleshooting

If you run into trouble or have questions just [submit an issue](https://github.com/danielcobo/rmtrailing/issues).

## 🤝 Contributing

### Anyone can contribute

Contributions come in many shapes and sizes. All are welcome.
You can contribute by:

- asking questions
- suggesting features
- sharing this repo with friends
- improving documentation (even fixing typos counts 😉)
- providing tutorials (if you do, please [let me know](https://twitter.com/danielcobocom), I would love to read them)
- improving tests
- contributing code (new features, performance boosts, code readability improvements..)

### Rules for contributions

**General guidelines:**

- there are no dumb questions
- be polite and respectful to others
- do good

**When coding remember:**

- working > maintainability > performance
- best code is no code
- be descriptive when naming
- keep it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- do test

**Contribution licence:**
All contributions are considered to be under same [license](#️-license) as this repository.

## 🧪 Testing

**Testing suite:** [🃏 Jest](https://jestjs.io) | **Test command:** `npm test`

**Mutation testing suite:** [👽 Stryker Mutator](https://stryker-mutator.io) | **Mutation test command:** `npm run mutation`

If you intend to develop further or contribute code, then please ensure to write and use testing. Strive for 100% code coverage and high mutation scores. Mutation score 100 is great, but it's not always neccessary (if there are valid reasons).

## ⚖️ License

[MIT License](https://github.com/danielcobo/rmtrailing/blob/master/LICENSE.md)