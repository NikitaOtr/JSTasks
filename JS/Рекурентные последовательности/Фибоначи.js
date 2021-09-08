'use strict';
const getFibonachi = n => {
    let f0 = 0;
    let f1 = 1;
    for (let i = 1; i <= n; i++) {
        [f0, f1] = [f1, f0 + f1];
    }
    return f0;
};
console.log(0, getFibonachi(0));
console.log(1, getFibonachi(1));
console.log(2, getFibonachi(2));
console.log(3, getFibonachi(3));
console.log(4, getFibonachi(4));
console.log(5, getFibonachi(5));
console.log(6, getFibonachi(6));
console.log(10, getFibonachi(10));

