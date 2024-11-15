// CONSTANTS
const time = document.querySelector('#time')

// GLOBAL VARS
var timeVar = 60
var intervalID

// FUNCTION
function startTimer() {
  time.textContent = 'ETA: ' + timeVar
  intervalID = setInterval(() => {
    time.textContent = 'ETA: ' + timeVar 
    timeVar -= 1
    if (timeVar < 0) {
      clearInterval(intervalID) 
    }
    }, 1000);
}

// EVENT LISTENER
startButton.addEventListener('click', startTimer)
