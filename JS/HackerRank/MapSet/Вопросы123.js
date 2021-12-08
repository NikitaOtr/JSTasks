'use strict';
function freqQuery(queries) {
    const rez = [];
    const map = new Map();
    queries.forEach(([rule, value]) => {
        let f = false;
        if (rule === 1) {
            map.set(value, map.get(value) + 1 || 1);
        } else if (rule === 2) {
            if (map.get(value) > 1) {
                map.set(value, map.get(value) - 1);
            } else {
                map.delete(value);
            }
        } else if (rule === 3) {
            for (const v of map.values()) {
                if (v === value) {
                    f = true;
                }
            }
            if (f) {
                rez.push(1);
            } else {
                rez.push(0);
            }
        }
    });
    return rez;
}

console.log(freqQuery([
    [3, 4],
    [2, 1003],
    [1, 16],
    [3, 1]
]));

