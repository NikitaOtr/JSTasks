'use strict';

function pairs(k, arr) {
    const countNumber = {};
    arr.forEach(item => {
        countNumber[item] = countNumber[item] + 1 || 1;
    });

    let res = 0;
    for (const key of Object.keys(countNumber)) {
        if (countNumber[k + +key]) {
            res += countNumber[key] * countNumber[k + +key];
        }
    }
    return res;
}

console.log(pairs(2, [1, 1, 3, 3, 4, 2]));
