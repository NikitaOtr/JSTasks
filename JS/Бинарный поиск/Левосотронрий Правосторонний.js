'use strict';

const leftBinarySearch = (arr, x) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (x > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return arr[left] === x ? left : -1;
};
console.log(leftBinarySearch([-1, 1, 2, 3, 3, 3, 3, 4, 5], 3));

const rightBinarySearch = (arr, x) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const middle = Math.ceil((left + right) / 2);
        if (x < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle;
        }
    }
    return arr[right] === x ? right : -1;
};
console.log(rightBinarySearch([-1, 1, 2, 3, 3, 3, 3, 4, 5], 3));
