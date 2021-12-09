'use strict';

function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let res = Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i - 1] - arr[i]) < res) {
            res = Math.abs(arr[i - 1] - arr[i]);
        }
    }
    return res;
}

console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]));

