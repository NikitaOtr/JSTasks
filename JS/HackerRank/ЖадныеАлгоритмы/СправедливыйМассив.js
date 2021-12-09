'use strict';

function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let res = Infinity;
    k--;
    for (let i = k; i < arr.length; i++) {
        const value = arr[i] - arr[i - k];
        console.log(value);
        if (value < res) {
            res = value;
        }
    }
    return res;
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]));
