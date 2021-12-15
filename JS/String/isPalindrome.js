'use strict';

const isPalindrome = str => {
    str = str.toLowerCase();
    return [...str].reverse().join('') === str;
};

const str = "ПаАп";
console.log(str);
console.log(isPalindrome(str));
