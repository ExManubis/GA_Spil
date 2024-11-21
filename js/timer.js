// CONSTANTS
const time = document.querySelector('#time')

// GLOBAL VARS
var timeVar
var intervalID

// FUNCTION
function startTimer() {
  timeVar = 60
  time.textContent = 'ETA: ' + timeVar
  intervalID = setInterval(() => {
    timeVar -= 1
    time.textContent = 'ETA: ' + timeVar 
    if (timeVar == 0) {
      clearInterval(intervalID)
      endGame()
    }
    }, 1000);
}

// EVENT LISTENER
startButton.addEventListener('click', startTimer)
