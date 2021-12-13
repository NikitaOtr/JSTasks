'use strict';

function maxSubsetSum(arr) {
    const res = [arr[0], Math.max(arr[0], arr[1])];

    for (let i = 2; i < arr.length; i++) {
        res[i] = Math.max(res[i - 2] + arr[i], res[i - 1], arr[i]);
    }

    return Math.max(res[res.length - 1], 0);
}

console.log(maxSubsetSum([3, 5, -7, 8, 10]));
