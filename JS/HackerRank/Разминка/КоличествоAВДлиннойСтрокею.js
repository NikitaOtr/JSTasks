'use strict';
function repeatedString(s, n) {
    let coutnA = 0;
    for (const char of s) {
        coutnA += char === 'a' ? 1 : 0;
    }
    const countInserString = Math.floor(n / s.length);
    const tail = n - s.length * countInserString;
    let rez = coutnA * countInserString;
    for (let i = 0; i < tail; i++) {
        rez += s[i] === 'a' ? 1 : 0;
    }
    return rez;
}

console.log(repeatedString('abcac', 9));
