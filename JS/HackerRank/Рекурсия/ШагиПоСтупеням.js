'use strict';

// function stepPerms(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else if (n === 2) {
//         return 2;
//     } else if (n === 3) {
//         return 4;
//     }
//     return stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);
// }

function stepPerms(n) {
    const res = [];
    res[1] = 1;
    res[2] = 2;
    res[3] = 4;
    for (let i = 4; i <= n; i++) {
        res[i] = res[i - 3] + res[i - 2] + res[i - 1];
    }
    return res[n];
}

console.log(stepPerms(5));
