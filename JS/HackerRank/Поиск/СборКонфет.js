'use strict';

function minimumPasses(m, w, p, n) {
    let days = 0;
    let candies = 0;
    let answer = Math.ceil(n / (m * w));
    console.log(answer);

    while (days < answer) {
        console.log('candies', candies);
        if (p > candies) {
            const daysNeeded = Math.ceil((p - candies) / (m * w));
            candies += daysNeeded * m * w;
            days += daysNeeded;
        }

        const diff = Math.abs(m - w);
        const available = Math.trunc(candies / p);
        const purchased = Math.min(diff, available);

        if (m < w) {
            m += purchased;
        } else {
            w += purchased;
        }

        const rest = available - purchased;
        m += Math.trunc(rest / 2);
        w += rest - Math.trunc(rest / 2);
        candies -= available * p;

        candies += m * w;
        days += 1;

        const remainingCandies = Math.max(n - candies, 0);
        answer = Math.min(answer, days + Math.ceil(remainingCandies / (m * w)));
    }
    return answer;
}

console.log('res', minimumPasses(3, 1, 2, 12));
console.log('res', minimumPasses(1, 1, 1000000000000, 1000000000000));

