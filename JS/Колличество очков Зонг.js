'use strict';

const score = dice => {
    const threeValue = [1000, 200, 300, 400, 500, 600];
    const aloneValue  = [100, 0, 0, 0, 50, 0];

    const counts = [0, 0, 0, 0, 0, 0];
    dice.forEach(item =>  counts[item - 1]++);

    // eslint-disable-next-line arrow-body-style
    const rez = counts.reduce((acc, count, ind) => {
        return acc + (Math.floor(count / 3) * threeValue[ind]) + (count % 3) * aloneValue[ind];
    }, 0);
    return rez;
};

console.log(score([1, 2, 1, 2, 2])); // 400
