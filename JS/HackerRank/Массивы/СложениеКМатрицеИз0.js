'use strict';
function arrayManipulation(n, queries) {
    const acc = {};
    queries.forEach(([a, b, k]) => {
        acc[a] =  (acc[a] ?? 0) + k;
        acc[b + 1] = (acc[b + 1] ?? 0) - k;
    });

    let max = 0;
    let current = 0;
    for (const i in acc) {
        current += acc[i];
        max = Math.max(current, max);
    }
    return max;
}
console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));
console.log(arrayManipulation(10, [[1, 2, 10], [4, 8, 10]]));
