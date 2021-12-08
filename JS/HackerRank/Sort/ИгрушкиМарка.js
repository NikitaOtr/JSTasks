'use strict';

function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);
    let index = 0;
    while (prices[index] <= k) {
        k -= prices[index];
        index++;
    }
    return index;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
