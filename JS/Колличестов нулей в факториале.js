'use strict';

const zeros = n => {
    let rez = 0;
    for (let i = 5; i < n; i *= 5) {
        rez += Math.floor(n / i);
    }
    return rez;
};

console.log(zeros(30));
