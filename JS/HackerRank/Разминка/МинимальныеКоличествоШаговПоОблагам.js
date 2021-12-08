'use strict';

function jumpingOnClouds(c) {
    const rez = [...c];
    rez[0] = 0;
    rez[1] = 1;
    rez[2] = 1;
    for (let i = 3; i < rez.length; i++) {
        rez[i] = c[i - 2] === 0 ? rez[i - 2] + 1 : rez[i - 1] + 1;
    }
    return rez.pop();
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
