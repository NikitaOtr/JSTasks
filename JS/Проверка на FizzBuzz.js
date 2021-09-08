'use strict';

const FizzBuzz = n => {
    for (let num = 1; num < n + 1; num++) {
        if (num % 15 === 0) {
            console.log("::5 ::3");
        } else if (num % 5 === 0) {
            console.log("::5");
        } else if (num % 3 === 0) {
            console.log("::3");
        } else {
            console.log(num);
        }
    }
};
FizzBuzz(30);
