'use strict';

const findPalindrom = str => {
    const expandFromCenter = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    };
    let start = 0;
    let end = 0;

    for (let i = 0; i < str.length; i++) {
        let [left, right] = expandFromCenter(str, i, i);
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

console.log(findPalindrom('c2cab1ba'));
console.log(findPalindrom('c2cb1b'));
console.log(findPalindrom('c21cb21b'));
console.log(findPalindrom('123454321'));
console.log(findPalindrom('asddsa'));


