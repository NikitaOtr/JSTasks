'use strict';
function countingValleys(steps, path) {
    path = [...path];
    let height = 0;
    let rez = 0;
    path.forEach(item => {
        if (item === 'U') {
            height++;
            if (height === 0) {
                rez++;
            }
        } else {
            height--;
        }
    });
    return rez;
}

console.log(countingValleys(8, 'UDDDUDUU'));
