'use strict';

const used = Array(100).fill(false);
const G = Array(100).fill().map(() => Array.fill(0));
console.log(G);

// обход в ширину
const bfs = (G, s) => {
    const q = [s]; // очередь
    used[s] = true;
    while (q.length > 0) {
        const v = q.shift();
        for (const i of G[v]) {
            if (!used[i]) {
                q.push(i);
                used[i] = true;
            }
        }
    }
};

// обхд в глубину
const dfs = (G, s) => {
    const q = [s]; // стек
    used[s] = true;
    while (q.length > 0) {
        const v = q.pop();
        for (const i of G[v]) {
            if (!used[i]) {
                q.push(i);
                used[i] = true;
            }
        }
    }
};

dfs();
bfs();
