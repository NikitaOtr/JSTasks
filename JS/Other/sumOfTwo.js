'use strict';
// Вывыод индексов в отсортированном виде
function sumOfTwo(numbers, target = 0) {
    const countNumbers = new Map();
    numbers.forEach((item, index) => {
        if (countNumbers.has(item)) {
            countNumbers.get(item).push(index);
        } else {
            countNumbers.set(item, [index]);
        }
    });

    const res = [];
    numbers.forEach((item, index) => {
        if (item * 2 === target) {
            if (countNumbers.has(item)) {
                const arr = countNumbers.get(item);
                for (let i = 1; i < arr.length; i++) {
                    res.push([index, arr[i]]);
                }
                countNumbers.delete(item);
            }
        } else if (countNumbers.has(target - item)) {
            countNumbers.get(target - item).forEach(ind => {
                res.push([index, ind]);
            });
            countNumbers.delete(item);
        }
    });
    return res;
}

// Вывод самих значений в отсортированном виде
// function sumOfTwo(numbers, target = 0) {
//     const countNumbers = {};
//     numbers.forEach(item => {
//         countNumbers[item] = countNumbers[item] + 1 || 1;
//     });

//     const res = [];
//     Object.keys(countNumbers).forEach(key => {
//         if (+key === (target / 2)) {
//             if (countNumbers[key] >= 2) {
//                 res.push([key, key]);
//             }
//         } else if (countNumbers[target - key]) {
//             res.push([+key, target - key]);
//             countNumbers[key] = null;
//         }
//     });
//     return res;
// }

console.log(sumOfTwo([1, 0, 3, 2, 1, 2, 0, 4, 4], 8));
