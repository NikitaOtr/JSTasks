'use strict';

function firstNonRepeatingLetter(str) {
    const letter = {};
    for (const char of str) {
        const lowerChar = char.toLowerCase();
        letter[lowerChar] = letter[lowerChar] + 1 || 1;
    }
    for (const char of str) {
        const lowerChar = char.toLowerCase();
        if (letter[lowerChar] === 1) {
            return char;
        }
    }
    return '';

}
console.log(firstNonRepeatingLetter('moonmEn'));
