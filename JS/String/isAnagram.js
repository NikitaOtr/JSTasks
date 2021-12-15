'use strict';

// const isAnagram = (str1, str2) => {
//     str1 = str1.toLowerCase().split('').sort().join('');
//     str2 = str2.toLowerCase().split('').sort().join('');
//     return str1 === str2;
// };

const isAnagram = (str1, str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const latterS1 = {};
    for (const char of str1) {
        latterS1[char] = latterS1[char] + 1 || 1;
    }

    const latterS2 = {};
    for (const char of str2) {
        latterS2[char] = latterS2[char] + 1 || 1;
    }

    if (Object.keys(latterS1).length !== Object.keys(latterS2).length) {
        return false;
    }

    for (const key in latterS1) {
        if (latterS1[key] !== latterS2[key]) {
            return false;
        }
    }
    return true;
};

const str1 = "finderd";
const str2 = "Friendd";
console.log(isAnagram(str1, str2));
