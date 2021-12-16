'use strict';

const searchLongestPalindrom = str => {
    const expandFromCenter = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    };

    let start = 0;
    let end = 0;
    let left = 0;
    let right = 0;

    for (let i = 0; i < str.length; i++) {
        [left, right] = expandFromCenter(str, i, i);
        if ((right - left + 1) > (end - start + 1)) {
            start = left;
            end = right;
        }

        [left, right] = expandFromCenter(str, i, i + 1);
        if ((right - left + 1) > (end - start + 1)) {
            start = left;
            end = right;
        }
    }

    return str.slice(start, end + 1);
};

console.log(searchLongestPalindrom('c2cab1ba'));
console.log(searchLongestPalindrom('c2cb1b'));
console.log(searchLongestPalindrom('c21cb21b'));
console.log(searchLongestPalindrom('123454321'));
console.log(searchLongestPalindrom('asddsa'));


