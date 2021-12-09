'use strict';

function reverseShuffleMerge(s) {
    s = [...s].reverse().join('');
    const count = new Map();
    for (const c of s) {
        count.set(c, count.get(c) + 1 || 1);
    }

    const need = new Map();
    for (const c of count.keys()) {
        need.set(c, count.get(c) / 2);
    }
    const solution = [];
    let i = 0;
    while (solution.length < (s.length / 2)) {
        let minCharAt = -1;
        while (true) {
            const c = s[i];
            if (need.get(c) > 0 && (minCharAt < 0 || c < s[minCharAt])) {
                minCharAt = i;
            }
            count.set(c, count.get(c) - 1);
            if (count.get(c) < need.get(c)) {
                break;
            }
            i += 1;
        }

        for (let j = (minCharAt + 1); j < (i + 1); j++) {
            count.set(s[j], count.get(s[j]) + 1);
        }

        need.set(s[minCharAt], need.get(s[minCharAt]) - 1);
        solution.push(s[minCharAt]);
        i = minCharAt + 1;
    }
    return solution.join('');

}


console.log(reverseShuffleMerge('eggegg'));
console.log(reverseShuffleMerge('abcdefgabcdefg'));
console.log(reverseShuffleMerge('aeiouuoiea'));
