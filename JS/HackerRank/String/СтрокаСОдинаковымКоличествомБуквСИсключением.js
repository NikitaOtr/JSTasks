'use strict';

function isValid(s) {
    const letters = {};
    for (const letter of s) {
        letters[letter] = letters[letter] + 1 || 1;
    }
    const arr = Object.values(letters).sort((a, b) => a - b);

    const first = arr[0];
    const second = arr[1];
    const last = arr[arr.length - 1];
    const secondLast = arr[arr.length - 2];

    if (first === last) {
        return "YES";
    }
    if (first === 1 && second === last) {
        return "YES";
    }
    if (first === second && second === secondLast && secondLast === (last - 1)) {
        return "YES";
    }
    return "NO";
}

console.log(isValid('abbac'));
