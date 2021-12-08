'use strict';
function LCSubStr(s1, s2) {
    const cash = Array(s1.length + 1).fill(Array(s2.length + 1).fill(0));
    let maxI = 0;
    let maxJ = 0;

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                cash[i][j] = cash[i - 1][j - 1] + 1;
                if (cash[i][j] > cash[maxI][maxJ]) {
                    maxI = i;
                    maxJ = j;
                }
            }
        }
    }
    const len = cash[maxI][maxJ];
    return [s1.slice(maxI - len, maxI), s2.slice(maxJ - len, maxJ)];

}

console.log(LCSubStr('abdcd', 'dcweeabd'));


