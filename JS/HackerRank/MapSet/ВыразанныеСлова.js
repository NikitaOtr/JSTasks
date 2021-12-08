'use strict';

function checkMagazine(magazine, note) {
    const magazineWords = new Map();
    for (const word of magazine) {
        magazineWords.set(word, magazineWords.get(word) + 1 || 1);
    }

    const noteWords = new Map();
    for (const word of note) {
        noteWords.set(word, noteWords.get(word) + 1 || 1);
    }

    for (const word of noteWords.keys()) {
        if (!(magazineWords.get(word) && magazineWords.get(word) >= noteWords.get(word))) {
            return console.log('No');
        }
    }
    return console.log('Yes');
}


console.log(checkMagazine([ 'give', 'me', 'one', 'grand', 'today', 'night' ], [ 'give', 'one', 'grand', 'today' ]));
// console.log(checkMagazine('two times three is not four', 'two times two is four'));



