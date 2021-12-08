'use strict';

function sherlockAndAnagrams(s) {
    const map = new Map();
    let rez = 0;

    for (let count = 1; count <= s.length - 1; count++) {
        for (let start = 0; start <= (s.length - count); start++) {
            const str = s.slice(start, start + count).split('').sort().join('');
            map.set(str, map.get(str) + 1 || 1);
        }
    }
    for (const word of map.keys()) {
        rez += map.get(word) * (map.get(word) - 1) / 2 || 0;
    }

    return rez;
}

console.log(sherlockAndAnagrams('kkkk'));
console.log(sherlockAndAnagrams('cdcd'));
