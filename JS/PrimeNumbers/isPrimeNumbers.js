'use strict';
const isPrimeNumber = n => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
console.log('-4', isPrimeNumber(-4));
console.log('-3', isPrimeNumber(-3));
console.log('-2', isPrimeNumber(-2));
console.log('-1', isPrimeNumber(-1));
console.log('0', isPrimeNumber(0));
console.log('1', isPrimeNumber(1));
console.log('2', isPrimeNumber(2));
console.log('3', isPrimeNumber(3));
console.log('4', isPrimeNumber(4));

