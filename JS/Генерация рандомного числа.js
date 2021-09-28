'use strict';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const obj = {};
let f;
for (let i = 0; i < 10 ** 7; i++) {
    f = getRandomNumber(-100, 100);
    obj[f] = obj[f] + 1 || 1;
}
console.log(obj);
