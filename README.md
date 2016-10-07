# persian-string-compare
> A comparator function for comparing two persian strings with correct alphabetic order.

## Installation

```sh
$ npm install persian-alphabetic-compare
```

## Usage

```js
import persianAlphabeticCompare from 'persian-alphabetic-compare';

['پاوه', 'تهران', 'بهشهر', 'گرگان',
'کرمانشاه', 'کردکوی', 'یاسوج', 'اهواز'].sort(persianAlphabeticCompare);
// => ["اهواز", "بهشهر", "پاوه", "تهران", "کردکوی", "کرمانشاه", "گرگان", "یاسوج"]
```

## JavaScript Intl API
If you don't have <IE11 requirement, you don't need this library. Most major browsers support
[Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
API, which provides Locale-aware string comparison among other neat features.

```js
var collator = new Intl.Collator('fa');

['پاوه', 'تهران', 'بهشهر', 'گرگان',
'کرمانشاه', 'كردکوی', 'ياسوج', 'اهواز'].sort(collator.compare);
// => ["اهواز", "بهشهر", "پاوه", "تهران", "كردکوی", "کرمانشاه", "گرگان", "ياسوج"]
```
