'use strict';
function twoStrings(s1, s2) {
    const setS1 = new Set([...s1]);
    for (const char of s2) {
        if (setS1.has(char)) {
            return 'YES';
        }
    }
    return 'NO';
}

console.log(twoStrings('afasdfadsf', 'afadsfadsf'));
