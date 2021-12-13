'use strict';
//wrong!!!!!!!!!!!!!!
function maximumSum(a, m) {
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j >= 0; j--) {
            const arr = a.slice(j, i + 1);
            const f = arr.reduce((sum, item) => sum + item, 0) % m;
            if (f > res) {
                res = f;
            }
        }
    }
    return res;
}

console.log(maximumSum([1, 4, 2], 7));


