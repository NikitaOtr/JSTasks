'use strict';
const lineOfSimple = n => {
    const rez = [];
    const block = [];

    for (let i = 2; i <= n; i++) {
        if (!block[i]) {
            rez.push(i);
            for (let j = i * i; j <= n; j += i) {
                block[j] = j;
            }
        }
    }
    return rez;
};

console.log(lineOfSimple(100));
