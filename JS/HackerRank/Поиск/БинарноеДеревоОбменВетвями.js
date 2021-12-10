'use strict';

function swapNodes(indexes, queries) {
    const swap = (k, item = 0, h = 1) => {
        if (item < 0) {
            return;
        }
        if (h % k === 0) {
            [indexes[item][0], indexes[item][1]] = [indexes[item][1], indexes[item][0]];
        }
        swap(k, indexes[item][0] - 1, h + 1);
        swap(k, indexes[item][1] - 1, h + 1);
    };
    const treeTraversal = (ind = 0) => {
        if (ind < 0) {
            return [];
        }
        return [...treeTraversal(indexes[ind][0] - 1), (ind + 1), ...treeTraversal(indexes[ind][1] - 1)];
    };

    const res = [];
    queries.forEach(k => {
        swap(k);
        res.push(treeTraversal());
    });

    return res;
}

console.log(swapNodes([
    [ 2, 3 ], [ 4, -1 ], [ 5, -1 ],
    [ 6, -1 ], [ 7, 8 ], [ -1, 9 ],
    [ -1, -1 ], [ 10, 11 ], [ -1, -1 ],
    [ -1, -1 ], [ -1, -1 ]
], [ 2, 4 ]));

// console.log(swapNodes([[2, 3], [4, 5], [6, 7], [-1, -1], [-1, -1], [-1, -1], [-1, -1]], [1, 1]));
