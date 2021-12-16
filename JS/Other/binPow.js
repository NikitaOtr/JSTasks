'use strict';

const binPow = (num, pow) => {
    let rez = 1;
    while (pow) {
        if (pow % 2 === 1) {
            pow--;
            rez *= num;
        }
        pow /= 2;
        rez *= rez;
    }
    return rez;
};

console.log(binPow(3, 10));
