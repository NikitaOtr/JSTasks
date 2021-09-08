'use strict';

// Возвращет индекс нечетно ктороный находиться среди чётных
// или индекс четного который находиться среди нечётных
const findOutlier = numbers => {
    numbers = numbers.split(' ');
    const even = numbers.filter(item => item % 2 === 0);
    if (even.length === 1) {
        return numbers.findIndex(item => item % 2 === 0) + 1;
    } else {
        return numbers.findIndex(item => item % 2 !== 0) + 1;
    }
};
console.log(findOutlier("1 2 2 4 6"));
console.log(findOutlier("1 7 9 11 12"));



