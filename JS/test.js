'use strict';

function getAnagramPeriod(input_str) {

    const creatMap = str => {
        const latter = {};
        for (const char of str) {
            latter[char] = latter[char] + 1 || 1;
        }
        return latter;
    };

    const checkAnagramma = (obj1, obj2) => {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (const key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    };

    for (let count = 1; count <= input_str.length; count++) {
        const str = creatMap(input_str.slice(0, count));
        let flag = true;
        for (let i = 0; i < input_str.length; i += count) {
            const n = creatMap(input_str.slice(i, i + count));
            if (!(checkAnagramma(str, n))) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return count;
        }
    }
}

// console.log(getAnagramPeriod('bbaaababababaabb'));

function reachTheEnd(grid, maxTime) {

    const maxX = grid.length;
    const maxY = grid[0].length;
    const G = [];
    for (const i of grid) {
        G.push([...i]);
    }

    function dfs(G, s) {
        const q = [s];
        G[0][0] = 0;
        while (q.length > 0) {
            const [x, y] = q.pop();
            G[x][y] += 1;
            if (x + 1 < maxX && G[x + 1][y] === '.') {
                G[x + 1][y] = G[x][y];
                q.push([x + 1, y]);
            }
            if ((x - 1) > -1 && G[x - 1][y] === '.') {
                G[x - 1][y] = G[x][y];
                q.push([x - 1, y]);
            }
            if ((y - 1) > -1 && G[x][y - 1] === '.') {
                G[x][y - 1] = G[x][y];
                q.push([x, y - 1]);
            }
            if ((y + 1) < maxY && G[x][y + 1] === '.') {
                G[x][y + 1] = G[x][y];
                q.push([x, y + 1]);
            }

        }
    }
    dfs(G, [0, 0]);
    console.log(G);
    return G[maxX - 1][maxY - 1] - 1 <= maxTime ?  'Yes' : 'No';
}

console.log(reachTheEnd([['.', '.'], ['.', '.']], 3));
