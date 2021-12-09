'use strict';
function LCSubStr(s1, s2) {
    const cash = Array(s1.length + 1).fill().map(() => Array(s2.length + 1).fill(0));
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                cash[i][j] = cash[i - 1][j - 1] + 1;
            } else {
                cash[i][j] = Math.max(cash[i][j - 1], cash[i - 1][j]);
            }
        }
    }
    console.log(cash);
    return cash[s1.length][s2.length];
}

console.log(LCSubStr('HARRY', 'SALLY'));
