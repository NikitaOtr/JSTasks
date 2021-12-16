'use strict';

const angleBetweenHourAndMinutes = (hour, minute) => {
    hour = 30 * hour + 30 * (minute / 60);
    minute *= 6;
    const angle = Math.abs(hour - minute);
    return angle <= 180 ? angle : 360 - angle;
};

console.log(angleBetweenHourAndMinutes(3, 30)); // 75
