/* eslint-disable brace-style */
'use strict';
// ()
const validBrackets = brackets => {
    let value = 0;
    for (const bracket of brackets) {
        if (value < 0) { return false; }
        else if (bracket === '(') { value++; }
        else if (bracket === ')') { value--; }
    }
    return value === 0;
};

console.log(validBrackets('(()()(()))'));
