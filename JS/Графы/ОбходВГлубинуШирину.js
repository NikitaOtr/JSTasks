'use strict';

const used = Array(100).fill(false);

// обход в Ширину
function bfs(G, s) {
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
}


// обхд в глубину
function dfs(G, s) {
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
}
