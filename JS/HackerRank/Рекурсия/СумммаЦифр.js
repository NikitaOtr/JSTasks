'use strict';

function superDigit(n, k) {
    n = [...n].reduce((sum, number) => sum + +number, 0);
    n *= k;
    n = n.toString();
    while (n.length > 1) {
        n = [...n].reduce((sum, number) => sum + +number, 0);
        n = n.toString();
    }
    return n;
}

console.log(superDigit('17', 2));
