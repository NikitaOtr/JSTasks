const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const randomItem = arr[getRandomNumber(0, arr.length)];
    const lessArr = [];
    const equalsArr = [];
    const moreArr = []

    arr.forEach(item => {
        if (item < randomItem) {
            lessArr.push(item);
        } else if (item > randomItem) {
            moreArr.push(item);
        } else {
            equalsArr.push(item);
        }
    });
    return [...quickSort(lessArr), ...equalsArr, ...quickSort(moreArr)];
}

console.log(quickSort([5, -3, -1, 6, 2, 6, -5, 1, 1, -11, 56, -123123, 2123]))