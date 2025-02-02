const countSec = document.getElementById("timer");

// Для таймера только с секундами
let timerId = setInterval(() => {
    if (Number(countSec.textContent) > 0) {
        countSec.textContent = Number(countSec.textContent) - 1;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
    }
}, 1000);

// Для таймира в формате hh:mm:ss

// function getTotalSeconds(timeInPage) {
//     let hours = +timeInPage[0];
//     console.log('hours ' + hours);
//     let minutes = +timeInPage[1];
//     console.log('minutes ' + minutes);
//     let seconds = +timeInPage[2];
//     console.log('seconds ' + seconds);
//     let totalSeconds = hours*3600 + minutes*60 + seconds;
//     console.log("totalSeconds " + totalSeconds);
//     return totalSeconds;
// }

// function getFormat(sec) {
//     let result;
//     let h = Math.floor(sec/3600);
//     console.log('h ' + h);
//     let m = Math.floor((sec - h*3600)/60);
//     console.log('m ' + m);
//     let s = sec - h*3600 - m*60;
//     console.log('s ' + s);
//     if (h < 10) {
//         h = '0' + h.toString();
//     }
//     if (m < 10) {
//         m = '0' + m.toString();
//     }
//     if (s < 10) {
//         s = '0' + s.toString();
//     }
//     result = h + ":" + m + ":" +s;
//     console.log("result " + result);
//     return result;
// }

// let countHhMmSs = countSec.textContent.split(":");

// let sec = getTotalSeconds(countHhMmSs)
// let timerId = setInterval(() => {
//     console.log(sec);
//     console.log(getFormat(sec));
//     if (sec > 0) {
//         --sec;
//         countSec.textContent = getFormat(sec);
//     } else {
//         alert("Вы победили в конкурсе!");
//         clearInterval(timerId);
//     }
// }, 1000);
