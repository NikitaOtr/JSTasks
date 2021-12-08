'use strict';
function minimumBribes(q) {
    let swap = 0;
    let bribes;
    for (let i = q.length - 1; i >= 0; i--) {
        bribes = q[i] - (i + 1);
        if (bribes > 2) {
            return console.log('Too chaotic');
        }
        const startPosition = q[i] - 2 > 0 ? q[i] - 2 : 0;
        for (let j = startPosition; j < i; j++)
            if (q[i] < q[j]) {
                swap++;
            }
    }
    console.log(swap);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
