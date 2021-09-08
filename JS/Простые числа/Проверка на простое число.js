'use strict';
const checkPrime = n => {
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
console.log('-4', checkPrime(-4));
console.log('-3', checkPrime(-3));
console.log('-2', checkPrime(-2));
console.log('-1', checkPrime(-1));
console.log('0', checkPrime(0));
console.log('1', checkPrime(1));
console.log('2', checkPrime(2));
console.log('3', checkPrime(3));
console.log('4', checkPrime(4));

