'use strict';

const isPangram = string => {
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(item => string.includes(item));
};

console.log(isPangram('The juick brown fox jumps over the lazy dog.'));
