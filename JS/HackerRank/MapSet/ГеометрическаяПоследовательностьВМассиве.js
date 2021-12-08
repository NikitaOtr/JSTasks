'use strict';

function countTriplets(arr, r) {
    let rez = 0;
    const countNumbers = new Map();
    const countPars = new Map();

    for (const number of arr) {
        const numberR = number / r;
        rez += countPars.get(numberR) || 0;

        countPars.set(number, countPars.get(number) + countNumbers.get(numberR) || countNumbers.get(numberR) || 0);
        countNumbers.set(number, countNumbers.get(number) + 1 || 1);
    }
    return rez;
}

// console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
// console.log(countTriplets([1, 2, 1, 4], 2));
console.log(countTriplets([1, 1, 2, 2, 4, 4], 2));
