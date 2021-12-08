'use strict';

const checkAnagramma = (str1, str2) => {
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');
    return str1 === str2;
};

const str1 = "finderd";
const str2 = "Friendd";
console.log(checkAnagramma(str1, str2));
