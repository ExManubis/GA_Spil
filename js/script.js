// GLOBAL CONSTANTS
const startScreen = document.getElementById('start')
const startButton = document.querySelector('#start_button')
const gameOver = document.querySelector('#game_over')
const gameWin = document.querySelector('#level_complete') 
const goodShipContainer = document.querySelector('#good_ship_container')
const goodShipSprite = document.querySelector('#good_ship_sprite')
const evilShipContainer = document.querySelector('#evil_ship_container')
const evilShipSprite = document.querySelector('#evil_ship_sprite')
const score = document.querySelector('#score')
const shield = document.querySelector('#shield')

// GLOBAL VARIABELS
var shieldVar
var scoreVar

// GLOBAL CONSTANTS
//// END GAME FUNCTION
const endGame = () => {
  console.log('ending game..')
  evilShipContainer.removeEventListener('mousedown', clickEvilHandler)
  evilShipContainer.removeEventListener('animationiteration', evilEvade)
  evilShipContainer.removeAttribute('class')
  evilShipSprite.removeAttribute('class')
  evilShipSprite.style.display = 'none'
  goodShipContainer.removeEventListener('mousedown', clickGoodHandler)
  goodShipContainer.removeEventListener('animationiteration', goodReset)
  goodShipContainer.removeAttribute('class')
  goodShipSprite.removeAttribute('class')
  goodShipSprite.style.display = 'none'
  if (shieldVar == 0 || scoreVar < 1000) {
    console.log('game over') 
    gameOver.style.display = 'grid'
  }
  else {
    console.log('you win!')
    gameWin.style.display = 'grid'
  }
}

//// CLICK EVIL SHIP FUNCTION
const clickEvilHandler = () => {
  console.log('click evil')
  evilShipContainer.removeEventListener('mousedown', clickEvilHandler)
  evilShipContainer.classList.add('freeze')
  evilShipSprite.classList.add('kill')
  scoreVar += 100
  score.innerHTML = 'Score:<br>' + scoreVar
  evilShipSprite.addEventListener('animationend', evilReset)
}

//// RESET EVIL FUNCTION
const evilReset = () => {
  evilShipContainer.removeAttribute('class')
  evilShipSprite.classList.remove('kill')
  evilShipContainer.offsetLeft
  evilShipContainer.classList.add('fly' + random(2), 'pos' + random(6))
  evilShipContainer.addEventListener('mousedown', clickEvilHandler)
}

//// EVIL EVADE FUNCTION
const evilEvade = () => {
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

//// CLICK METEOR FUNCTION
const clickGoodHandler = () => {
  console.log('click good') 
  goodShipContainer.removeEventListener('mousedown', clickGoodHandler)
  goodShipContainer.classList.add('freeze')
  goodShipSprite.classList.add('kill')
  scoreVar -= 500
  score.innerHTML = 'Score:<br>' + scoreVar
  goodShipSprite.addEventListener('animationend', goodReset)
}

//// RESET GOOD FUNCTION
const goodReset = () => {
  goodShipContainer.removeAttribute('class')
  goodShipSprite.classList.remove('kill')
  goodShipContainer.offsetLeft
  goodShipContainer.classList.add('fly' + random(2), 'pos' + random(6))
  goodShipContainer.addEventListener('mousedown', clickGoodHandler)
}

//// RANDOM NUMBER FUNCTION
function random(maxNum) {
  return Math.floor(Math.random() * maxNum)
}

// EVENT LISTENERS
window.addEventListener('load', showPage);
 
// SHOW PAGE
function showPage() {
  console.log('Show Page')
  startScreen.style.display = 'grid'
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
    
   }
  }
