'use strict';
function triplets(a, b, c) {
    let res = 0;
    a = [...new Set(a)].sort((item1, item2) => item1 - item2);
    b = [...new Set(b)].sort((item1, item2) => item1 - item2);
    c = [...new Set(c)].sort((item1, item2) => item1 - item2);

    let ai = 0;
    let bi = 0;
    let ci = 0;
    while (bi < b.length) {
        while (a[ai] <= b[bi] && ai < a.length) {
            ai += 1;
        }
        while (c[ci] <= b[bi] && ci < c.length) {
            ci += 1;
        }
        res += ai * ci;
        bi += 1;
    }
    return res;
}

console.log(triplets([1, 4, 5], [2, 3, 3], [1, 2, 3]));
