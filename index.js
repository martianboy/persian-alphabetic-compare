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

    function is_eos(s, i) {
        if (i >= s.length) return true;

        var c = s.charCodeAt(i);
        if (c < ignore_range[0] || c > ignore_range[1])
            return false;

        return is_eos(s, i + 1);
    }

    function compareAtIndex(i, j) {
        var eos1 = is_eos(s1, i);
        var eos2 = is_eos(s2, j);

        if (eos1 && eos2) return 0;
        if (eos1) return -1;
        if (eos2) return 1;

        var c1 = s1.charCodeAt(i);
        if (c1 >= ignore_range[0] && c1 <= ignore_range[1])
            return compareAtIndex(i + 1, j);

        var c2 = s2.charCodeAt(j);
        if (c2 >= ignore_range[0] && c2 <= ignore_range[1])
            return compareAtIndex(i, j + 1);

        var cmp_value =
            (persian_alphabet_fix_map[s1[i]] || c1) -
            (persian_alphabet_fix_map[s2[j]] || c2);

        if (cmp_value) return cmp_value;

        return compareAtIndex(i + 1, j + 1);
    }

    return compareAtIndex(0, 0);
}

module.exports = persianAlphabeticCompare;
