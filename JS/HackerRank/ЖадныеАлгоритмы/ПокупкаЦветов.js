'use strict';

function getMinimumCost(k, c) {
    c.sort((a, b) => b - a);
    let count = 0;
    let res = 0;
    c.forEach(item => {
        res += (Math.trunc(count / k) + 1) * item;
        count++;
    });
    return res;
}

console.log(getMinimumCost(2, [2, 5, 6]));
