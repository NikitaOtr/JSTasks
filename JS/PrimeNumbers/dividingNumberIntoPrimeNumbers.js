'use strict';
const dividingNumberIntoPrimeNumbers = number => {
    const rez = {};
    let prime = 2;
    while (prime <= Math.sqrt(number)) {
        if (number % prime === 0) {
            rez[prime] = rez[prime] + 1 || 1;
            number /= prime;
        } else { prime++; }
    }
    rez[number] = rez[number] + 1 || 1;
    return rez;
};

console.log(dividingNumberIntoPrimeNumbers(1000003)); // ~ 10^6
console.log(dividingNumberIntoPrimeNumbers(1000000007)); // ~ 10^9
console.log(dividingNumberIntoPrimeNumbers(1000000000039)); // ~ 10^12
console.log(dividingNumberIntoPrimeNumbers(1000000000000037)); // ~ 10^15
