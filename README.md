# Persian Number Converter 🔢

A lightweight utility to seamlessly convert Persian (Farsi) numerals to English numbers in your JavaScript/TypeScript projects.

## Features ✨

- ✅ Convert Persian numerals (۰-۹) to English (0-9)
- ✅ Super lightweight (~1KB)
- ✅ Zero dependencies
- ✅ TypeScript support included
- ✅ Works in Node.js and browser environments

## Installation 📦

```bash
npm install persian-number-converter
# or
yarn add persian-number-converter
```

## Basic Usage 🚀

```javascript
import { convertPersianNumbers } from "persian-number-converter";

// Convert Persian numbers to English
const englishNumbers = convertPersianNumbers("۰۱۲۳۴۵۶۷۸۹");
console.log(englishNumbers); // Output: "0123456789"

// Works with mixed strings
const mixedText = convertPersianNumbers("تعداد: ۱۲۰۰");
console.log(mixedText); // Output: "تعداد: 1200"
```

## Advanced Usage 💡

### Convert in Node.js:

```javascript
const { convertPersianNumbers } = require("persian-number-converter");

console.log(convertPersianNumbers("شماره تماس: ۰۹۱۲۱۲۳۴۵۶۷"));
// Output: "شماره تماس: 09121234567"
```

### TypeScript Support:

```typescript
import { convertPersianNumbers } from "persian-number-converter";

const price: string = convertPersianNumbers("قیمت: ۱۲,۰۰۰ تومان");
console.log(price); // "قیمت: 12,000 تومان"
```

## API Reference 📚

### `convertPersianNumbers(input: string): string`

Converts all Persian numerals in the input string to English numerals.

**Parameters:**

- `input`: The string containing Persian numbers to convert

**Returns:**

- A new string with all Persian numerals converted to English

## Why Use This? 🤔

When dealing with:

- User inputs in Persian/Farsi
- Scraping Persian content
- Processing multilingual data
- Normalizing numbers for calculations

## Benchmarks ⚡

Converts 10,000 characters in <1ms (Node.js v18)

## Contributing 🤝

PRs and issues are welcome!

```bash
git clone https://github.com/your-repo/persian-number-converter.git
cd persian-number-converter
npm install
npm test
```

## License 📄

MIT © [AmirAghajani98]

---

**Keywords**: persian, farsi, numbers, converter, utility, javascript, typescript, i18n
