// GLOBAL CONSTANTS
const startScreen = document.getElementById('start')
const startButton = document.querySelector('#start_button')
const goodShipContainer = document.querySelector('#good_ship_container')
const goodShipSprite = document.querySelector('#good_ship_sprite')
const evilShipContainer = document.querySelector('#evil_ship_container')
const evilShipSprite = document.querySelector('#evil_ship_sprite')
const score = document.querySelector('#score')
const shield = document.querySelector('#shield')

// GLOBAL VARIABELS
var shieldVar
var scoreVar

const endGame = () => {
  console.log('ending game..')
  if (shieldVar == 0 || scoreVar < 3000) {
    console.log('game over') 
  }
  else {
    console.log('you win!')
  }
}

// EVENT LISTENERS
window.addEventListener('load', showPage);

// GLOBAL FUNCTIONS
function random(maxNum) {
  return Math.floor(Math.random() * maxNum)
}

// SHOW PAGE
function showPage() {
  console.log('Show Page')
  startScreen.style.display = 'block'
  startButton.addEventListener('click', startGame)

  // GAME STARTED
  function startGame() {
    console.log('starting game..')
    startScreen.style.display = 'none'  
    shieldVar = 100
    scoreVar = 0
    score.innerHTML = 'Score:<br>' + scoreVar
    shield.textContent = shieldVar + '%'
    evilShipContainer.classList.add('fly' + random(2), 'pos' + random(6))
    evilShipContainer.addEventListener('mousedown', clickEvilHandler)
    evilShipContainer.addEventListener('animationiteration', evilEvade)
    goodShipContainer.classList.add('fly' + random(2), 'pos' + random(6))
    goodShipContainer.addEventListener('mousedown', clickGoodHandler)
    goodShipContainer.addEventListener('animationiteration', goodReset)
    
    // GOOD SHIP CLICK
    function clickGoodHandler() {
      console.log('click good') 
      goodShipContainer.removeEventListener('mousedown', clickGoodHandler)
      goodShipContainer.classList.add('freeze')
      goodShipSprite.classList.add('kill')
      scoreVar -= 500
      score.innerHTML = 'Score:<br>' + scoreVar
      goodShipSprite.addEventListener('animationend', goodReset)
    }

    // GOOD RESET
    function goodReset() {
      goodShipContainer.removeAttribute('class')
      goodShipSprite.classList.remove('kill')
      goodShipContainer.offsetLeft
      goodShipContainer.classList.add('fly' + random(2), 'pos' + random(6))
      goodShipContainer.addEventListener('mousedown', clickGoodHandler)
    }

    // EVIL SHIP CLICK
    function clickEvilHandler() {
      console.log('click evil')
      evilShipContainer.removeEventListener('mousedown', clickEvilHandler)
      evilShipContainer.classList.add('freeze')
      evilShipSprite.classList.add('kill')
      scoreVar += 100
      score.innerHTML = 'Score:<br>' + scoreVar
      evilShipSprite.addEventListener('animationend', evilReset)
  }
    
    // EVIL SHIP MISS
    function evilEvade() {
      scoreVar -= 100
      score.innerHTML = 'Score:<br>' + scoreVar
      shieldVar -= 25
      shield.textContent = shieldVar + '%'
      if (shieldVar == 0) {
        endGame() 
      }
      else {
        evilReset()
      }  
    }

    // EVIL RESET
    function evilReset() {
      evilShipContainer.removeAttribute('class')
      evilShipSprite.classList.remove('kill')
      evilShipContainer.offsetLeft
      evilShipContainer.classList.add('fly' + random(2), 'pos' + random(6))
      evilShipContainer.addEventListener('mousedown', clickEvilHandler)
    }

    // END GAME
    //const endGame = () => {
      //console.log('ending game..')
   // }
}
  }
