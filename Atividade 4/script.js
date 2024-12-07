const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const continueEl = document.querySelector("#continue");
const reset = document.querySelector("#reset");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

start.addEventListener("click", startTimer); 

function startTimer() {

    interval = setInterval(() => {
        if(!isRunning) {
            milliseconds+=10;

            if(milliseconds === 1000){
              seconds++;
              milliseconds = 0;
            }

            if(seconds === 60){
               minutes++;
               seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        
        }
    }, 10);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? time.padStart(3, '0') : time;
}

// outra forma de fazer a função startTimer

// function startTimer() {
//     if (isRunning) return;
//     isRunning = true;

//     interval = setInterval(() => {
//         milliseconds += 10;

//         if (milliseconds === 1000) {
//             seconds++;
//             milliseconds = 0;
//         }

//         if (seconds === 60) {
//             minutes++;
//             seconds = 0;
//         }

//         minutesEl.textContent = String(minutes).padStart(2, '0');
//         secondsEl.textContent = String(seconds).padStart(2, '0');
//         millisecondsEl.textContent = String(milliseconds).padStart(3, '0');
//     }, 10);
// }
