'use strict';

function firstNonRepeatingLetter(str) {
    const arr = str.toLowerCase().split('');
    for (const char of str) {
        const item = char.toLowerCase();
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            return char;
        }
    }
    return '';
}
console.log(firstNonRepeatingLetter('moonmEn'));
