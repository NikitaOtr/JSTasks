'use strict';

function minTime(machines, goal) {
    const countMachines = {};
    machines.forEach(item => {
        countMachines[item] = countMachines[item] + 1 || 1;
    });
    let left = 0;
    let right = Math.max(...machines) * goal;
    while (left < right) {
        const time = Math.trunc((left + right) / 2);
        let totalGoal = 0;
        for (const key of Object.keys(countMachines)) {
            totalGoal += Math.trunc(time / key) * countMachines[key];
        }
        if (goal > totalGoal) {
            left = time + 1;
        } else {
            right = time;
        }
    }
    return left;
}

console.log(minTime([1, 1, 9], 19));
