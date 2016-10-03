"use strict";

function persianAlphabeticCompare(s1, s2) {
    var persian_alphabet_fix_map = {
        'ؤ': 1608.5,
        'ئ': 1610,
        'پ': 1577,
        'ة': 1607.5,
        'ۀ': 1607.5,
        'ژ': 1586.5,
        'ک': 1603,
        'چ': 1580.5,
        'گ': 1603.5,
        'ی': 1609,
        'ي': 1609,
        '۰': 1632,
        '۱': 1633,
        '۲': 1634,
        '۳': 1635,
        '۴': 1636,
        '۵': 1637,
        '۶': 1638,
        '۷': 1639,
        '۸': 1640,
        '۹': 1641
    }

    // For simplicity, just ignore the range that includes Arabic diacritics.
    var ignore_range = [1611, 1631];

    // Checks if index i is at the end of s, ignoring ignore_range.
    function findNextIndex(s, i) {
        if (i >= s.length) return -1;

        var c = s.charCodeAt(i);
        if (c < ignore_range[0] || c > ignore_range[1])
            return i;

        return findNextIndex(s, i + 1);
    }

    function compareAtIndex(i, j) {
        var i = findNextIndex(s1, i);
        var j = findNextIndex(s2, j);

        if (i < 0 && j < 0) return 0;
        if (i < 0) return -1;
        if (j < 0) return 1;

        var cmp_value =
            (persian_alphabet_fix_map[s1[i]] || s1.charCodeAt(i)) -
            (persian_alphabet_fix_map[s2[j]] || s2.charCodeAt(j));

        if (cmp_value) return cmp_value;

        return compareAtIndex(i + 1, j + 1);
    }

    return compareAtIndex(0, 0);
}

module.exports = persianAlphabeticCompare;
