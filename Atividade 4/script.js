const minutesEl = document.getElementById("#minutes")
const secondsEl = document.getElementById("#seconds")
const millesecondsEl = document.getElementById("#milleseconds")
const startEl = document.getElementById("#start")
const pauseEl = document.getElementById("#pause")
const continueEl = document.getElementById("#continue")
const resetEl = document.getElementById("#reset")

let interval
let minutes = 0;
let seconds = 0;
let milleseconds = 0;
let isPaused = false;

startEl.addEventListener("click", startTimer)

function startTimer() {

    interval = setInterval(() => {

        if(isPaused){
            milleseconds += 10;
            
            if(milleseconds === 1000){
                seconds++
                milleseconds = 0;
            }
        }

    }, 10)

}