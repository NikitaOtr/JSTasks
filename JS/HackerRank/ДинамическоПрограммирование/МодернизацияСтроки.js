'use strict';

function abbreviation(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a.includes(b)) {
        return 'YES';
    } else {
        return 'NO';
    }
}

console.log(abbreviation('daBcd', 'ABC'));
