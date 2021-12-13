'use strict';

function candies(n, arr) {
    const fn = arr => {
        let count = 1;
        const candies = [1];

        for (let i = 1; i < n; i++) {
            if (arr[i] > arr[i - 1]) {
                count += 1;
            } else {
                count = 1;
            }
            candies.push(count);
        }
        return candies;
    };

    const ll = fn(arr);
    arr.reverse();
    const lr = fn(arr);
    lr.reverse();
    return ll.reduce((sum, _, index) => sum + Math.max(ll[index], lr[index]), 0);
}

// console.log(candies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]));
// console.log(candies(8, [2, 4, 3, 5, 2, 6, 4, 5]));
// console.log(candies(8, [1, 2, 3, 4, 3, 2, 3]));
// console.log(candies(5, [1, 2, 3, 2, 1]));
console.log(candies(5, [5, 4, 3, 2, 1]));




