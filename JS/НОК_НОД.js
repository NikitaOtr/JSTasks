'use strict';

// Наибольший общий делитель
const NOD = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
};

// Наименьшее общее кратное
const NOK = (a, b) => (a * b) / NOD(a, b);

console.log(NOD(10, 50));
console.log(NOK(10, 50));
