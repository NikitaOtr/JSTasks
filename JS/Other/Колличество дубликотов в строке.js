'use strict';

const duplicateCount = text => {
    let count = 0;
    text = text.toLowerCase();
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(item => {
        if (text.indexOf(item) !== text.lastIndexOf(item)) {
            count += 1;
        }
    });
    return count;
};

console.log(duplicateCount("Indivisibilities"));
