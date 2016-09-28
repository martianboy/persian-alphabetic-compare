function persianAlphabeticCompare(s1, s2) {
    var persian_alphabet_fix_map = {
        'ؤ': 1608.5,
        'ئ': 1609.5,
        'پ': 1577,
        'ة': 1607.5,
        'ژ': 1586.5,
        'ک': 1603,
        'چ': 1580.5,
        'گ': 1603.5,
        'ی': 1610
    }

    function compareAtIndex(i) {
        if (i >= s1.length && i >= s2.length) return 0;
        if (i >= s1.length) return -1;
        if (i >= s2.length) return 1;

        var cmp_value =
            (persian_alphabet_fix_map[s1[i]] || s1.charCodeAt(i)) -
            (persian_alphabet_fix_map[s2[i]] || s2.charCodeAt(i));
        
        if (!cmp_value) return compareAtIndex(i + 1);

        return cmp_value;
    }

    return compareAtIndex(0);
}

module.exports = persianAlphabeticCompare;
