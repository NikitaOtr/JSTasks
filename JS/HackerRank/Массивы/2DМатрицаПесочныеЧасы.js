'use strict';
function hourglassSum(arr) {
    const countColumn = arr.length - 1;
    const countRow = arr[0].length - 1;

    let rez = -Infinity;
    for (let column = 1; column < countColumn; column++) {
        for (let row = 1; row < countRow; row++) {
            const sum = arr[row - 1][column - 1] + arr[row - 1][column] + arr[row - 1][column + 1] +
                                                    arr[row][column] +
                        arr[row + 1][column - 1] + arr[row + 1][column] + arr[row + 1][column + 1];
            rez = Math.max(sum, rez);
            console.log(row, column, sum);
        }
    }
    return rez;
}

console.log(hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 2, 4, 4],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 0, 1, 2, 4]
]));
