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