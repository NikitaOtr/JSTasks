'use strict';
// все числа разные от 1 до n
function minimumSwaps(arr) {
    let swap = 0;
    const tmp = {};
    arr.forEach((value, index) => tmp[value] = index);

    arr.forEach((item, index, array) => {
        if (index !== (item - 1)) {
            swap++;
            const desiredValue = index + 1;
            array[index] = desiredValue;
            array[tmp[desiredValue]] = item;
            tmp[item] = tmp[index + 1];
        }
    });
    return swap;
}

console.log(minimumSwaps([4, 3, 1, 2]));
