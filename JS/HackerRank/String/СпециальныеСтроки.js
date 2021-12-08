'use strict';

function substrCount(n, s) {
    let res = 0;
    let i = 0;
    // 1st case, all letters are the same
    while (i < n) {
        let charCount = 1;
        while (i + 1 < n && s[i] === s[i + 1]) {
            i++;
            charCount++;
        }
        res += (charCount * (charCount + 1)) / 2;
        i++;
    }

    // 2nd case, palindrome
    for (let i = 1; i < n; i++) {
        let charCount = 1;
        while (
            i + charCount < n &&
            i - charCount >= 0 &&
            s[i - 1] !== s[i] &&
            s[i - 1] === s[i - charCount] &&
            s[i - 1] === s[i + charCount]
        ) {
            charCount++;
        }
        res += charCount - 1;
    }

    return res;
}

console.log(substrCount(7, 'abcbaba'));
