'use strict';
function luckBalance(k, contests) {
    contests.sort((a, b) => b[0] - a[0]);
    let res = 0;
    contests.forEach(item => {
        if (item[1] === 1) {
            if (k > 0) {
                res += item[0];
                k--;
            } else {
                res -= item[0];
            }
        } else {
            res += item[0];
        }
    });
    return res;
}

console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]));

