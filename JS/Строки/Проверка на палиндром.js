'use strict';

const checkPalindrome = str => str.split('').reverse().join('').toLowerCase() === str.toLowerCase();

const str = "ПаАп";
console.log(str);
console.log(checkPalindrome(str));
