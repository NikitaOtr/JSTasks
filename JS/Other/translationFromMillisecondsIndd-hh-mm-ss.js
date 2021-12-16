'use strict';

const getCorrectTime = time => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60 % 60);
    const hours = Math.floor(time / 3600 % 24);
    const days = Math.floor(time / 3600 / 24);
    return [days, hours, minutes, seconds].map(item => (item < 10 ? '0' + item : item)).join(':');
};

console.log(getCorrectTime(21600 * 2 * 2 * 6 * 1.1));
