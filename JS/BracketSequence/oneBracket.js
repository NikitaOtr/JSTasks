/* eslint-disable brace-style */
'use strict';
// ()
const isValidBrackets = brackets => {
    let value = 0;
    for (const bracket of brackets) {
        if (value < 0) { return false; }
        else if (bracket === '(') { value++; }
        else if (bracket === ')') { value--; }
    }
    return value === 0;
};

console.log(isValidBrackets('((14 * 45) + (56)(()))'));
