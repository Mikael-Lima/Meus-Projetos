let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if(interval){
        return;
    }
    interval = setInterval(() => {
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}
