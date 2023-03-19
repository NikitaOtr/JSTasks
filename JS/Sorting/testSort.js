function testSort(arr) {
    const notNegativeObj = {};
    const negativeObj = {};

    arr.forEach(item => {
        if (item > 0) {
            notNegativeObj[item] = notNegativeObj[item] + 1 || 1;
        } else {
            const localItem = -1 * item; 
            negativeObj[localItem] = negativeObj[localItem] + 1 || 1
        }
    });

    const res = [];

    Object.keys(negativeObj).reverse().forEach(key => {
        for (let i = 1; i <= negativeObj[key]; i++) {
            res.push(-1 * key);
        }
    });

    Object.keys(notNegativeObj).forEach(key => {
        for (let i = 1; i <= notNegativeObj[key]; i++) {
            res.push(+key);
        }
    });

    return res;
}


console.log(testSort([-12312, 1, 1, 5, -3, -1, 6, 2, 6, -5, 1, 1, -11, 56, -123123, 2123]))

// console.log( -1 * '23432');