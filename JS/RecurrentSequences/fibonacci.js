'use strict';
const getFibonacci = n => {
    let f0 = 0;
    let f1 = 1;
    for (let i = 1; i <= n; i++) {
        [f0, f1] = [f1, f0 + f1];
    }
    return f0;
};

console.log(0, getFibonacci(0));
console.log(1, getFibonacci(1));
console.log(2, getFibonacci(2));
console.log(3, getFibonacci(3));
console.log(4, getFibonacci(4));
console.log(5, getFibonacci(5));
console.log(6, getFibonacci(6));
console.log(10, getFibonacci(10));
