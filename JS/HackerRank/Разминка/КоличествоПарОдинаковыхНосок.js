'use strict';
function sockMerchant(n, ar) {
    const counts = {};
    ar.forEach(item => (counts[item] = counts[item] + 1 || 1));
    const rez = Object.values(counts).reduce((rez, item) => rez + Math.floor(item / 2), 0);
    return rez;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
