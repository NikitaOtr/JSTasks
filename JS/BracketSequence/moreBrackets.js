'use strict';
// () {} []
const isValidBrackets = (brackets) => {
    const openBrackets = ['(', '{', '['];
    const stack = [];
    for (const bracket of brackets) {
        if (openBrackets.includes(bracket)) {
            stack.push(bracket);
        } else if (bracket === ')' && stack.pop() !== '(') {
            return false;
        } else if (bracket === '}' && stack.pop() !== '{') {
            return false;
        } else if (bracket === ']' && stack.pop() !== '[') {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValidBrackets('23434(4[5{3432 + 4234} * 2343 + 34234] + 3424)'));