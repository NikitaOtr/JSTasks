'use strict';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const RandomNumberByLength = length => {
    let rez = '';
    for (let i = 0; i < length; i++) {
        rez += getRandomNumber(0, 9);
    }
    return rez;
};

// const obj = {};
// let f;
// for (let i = 0; i < 10 ** 7; i++) {
//     f = getRandomNumber(-100, 100);
//     obj[f] = obj[f] + 1 || 1;
// }
// console.log(obj);

for (let i = 0; i < 100; i++) {
    console.log(`${i}  ${RandomNumberByLength(14)}`);
}