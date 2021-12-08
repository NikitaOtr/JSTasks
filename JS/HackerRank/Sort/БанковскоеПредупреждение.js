'use strict';
//!!!!!!!!!
function activityNotifications(expenditure, d) {

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
        return arr[left] > x ? left : left + 1;
    };

    let res = 0;
    let arr = expenditure.slice(0, d).sort((a, b) => a - b);
    for (let i = 0; i < (expenditure.length - d); i++) {
        console.log(arr);
        let middle;
        if (arr.length % 2 === 1) {
            middle = arr[Math.trunc(arr.length / 2)] * 2;
        } else {
            middle = arr[Math.trunc(arr.length / 2) - 1] + arr[Math.trunc(arr.length / 2)];
        }

        if (expenditure[i + d] >= middle) {
            res++;
        }
        arr = arr.slice(1);
        const ind = leftBinarySearch(arr, expenditure[i + d]);
        arr.splice(ind, 0, expenditure[i + d]);
    }
    return res;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
