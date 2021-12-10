'use strict';

function whatFlavors(cost, money) {
    const obj = {};
    for (let i = 0; i < cost.length; i++) {
        if (obj[money - cost[i]]) {
            console.log(obj[money - cost[i]], i + 1);
            return;
        }
        obj[cost[i]] = i + 1;
    }
}

console.log(whatFlavors([1, 4, 5, 3, 2], 4));
