'use strict';

const firstUniqueLetter = str => {
    const letters = {};
    for (const char of str) {
        const lowerChar = char.toLowerCase();
        letters[lowerChar] = letters[lowerChar] + 1 || 1;
    }
    for (const char of str) {
        const lowerChar = char.toLowerCase();
        if (letters[lowerChar] === 1) {
            return char;
        }
    }
    return '';
};

console.log(firstUniqueLetter('moonmEn'));
