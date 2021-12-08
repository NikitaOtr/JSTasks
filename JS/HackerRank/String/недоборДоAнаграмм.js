'use strict';

function makeAnagram(a, b) {
    const letters = {};
    for (const letter of a) {
        letters[letter] = letters[letter] + 1 || 1;
    }
    for (const letter of b) {
        letters[letter] = letters[letter] ? letters[letter] - 1 : -1;
    }

    let res = 0;
    for (const count of Object.values(letters)) {
        res += Math.abs(count);
    }
    return res;
}

console.log(makeAnagram('cde', 'abc'));
