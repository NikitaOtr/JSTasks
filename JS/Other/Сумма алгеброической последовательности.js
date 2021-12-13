'use strict';

function getSum(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}
console.log(getSum(-3, 5));
console.log(getSum(5, -3));

