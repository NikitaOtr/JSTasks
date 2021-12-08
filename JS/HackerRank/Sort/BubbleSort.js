'use strict';

function countSwaps(a) {
    let swap = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < (a.length - 1); j++) {
            if (a[j] > a[j + 1]) {
                swap++;
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    console.log(`Array is sorted in ${swap} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a.pop()}`);
}

countSwaps();
