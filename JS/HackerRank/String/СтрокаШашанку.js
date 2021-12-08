'use strict';

function alternatingCharacters(s) {
    let res = 0;
    let index = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[index] === s[i]) {
            res += 1;
        } else {
            index = i;
        }
    }
    return res;
}

console.log(alternatingCharacters('ABABABAB'));
