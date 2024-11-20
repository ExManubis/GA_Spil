// GLOBAL CONSTANTS
const startScreen = document.getElementById('start')
const startButton = document.querySelector('#start_button')
const restartButtonGO = document.querySelector('#restart_button_go')
const restartButtonGW = document.querySelector('#restart_button_gw')
const gameOver = document.querySelector('#game_over')
const gameWin = document.querySelector('#level_complete') 
const goodShipContainer = document.querySelector('#good_ship_container')
const goodShipSprite = document.querySelector('#good_ship_sprite')
const evilShipContainer1 = document.querySelector('#evil_ship1_container')
const evilShipContainer2 = document.querySelector('#evil_ship2_container')
const evilShipSprite1 = document.querySelector('#evil_ship1_sprite')
const evilShipSprite2 = document.querySelector('#evil_ship2_sprite')
const score = document.querySelector('#score')
const shield = document.querySelector('#shield')
const soundShoot = document.querySelector('#sound_shoot')
const soundBG = document.querySelector('#sound_bg')
const soundBad = document.querySelector('#sound_bad')

// GLOBAL VARIABELS
var shieldVar
var scoreVar
var targetVar

// GLOBAL CONSTANTS
//// END GAME FUNCTION
const endGame = () => {
  console.log('ending game..')
  soundBG.pause()
  evilShipContainer1.removeEventListener('mousedown', clickEvilHandler)
  evilShipContainer1.removeEventListener('animationiteration', evilEvade)
  evilShipContainer1.removeAttribute('class')
  evilShipSprite1.removeAttribute('class')
  evilShipSprite1.style.display = 'none'
  evilShipContainer2.removeEventListener('mousedown', clickEvilHandler)
  evilShipContainer2.removeEventListener('animationiteration', evilEvade)
  evilShipContainer2.removeAttribute('class')
  evilShipSprite2.removeAttribute('class')
  evilShipSprite2.style.display = 'none'
  goodShipContainer.removeEventListener('mousedown', clickGoodHandler)
  goodShipContainer.removeEventListener('animationiteration', goodReset)
  goodShipContainer.removeAttribute('class')
  goodShipSprite.removeAttribute('class')
  goodShipSprite.style.display = 'none'
  time.style.display = 'none'
  if (shieldVar == 0 || scoreVar < 2500) {
    console.log('game over') 
    gameOver.style.display = 'grid'
    restartButtonGO.addEventListener('click', restartGame)
  }
  else {
    console.log('you win!')
    gameWin.style.display = 'grid'
    restartButtonGW.addEventListener('click', restartGame)
  }
}

//// CLICK EVIL SHIP FUNCTION
const clickEvilHandler = () => {
  console.log('click evil')
  soundShoot.currentTime = 0
  soundShoot.play()
  targetVar = event.currentTarget
  console.log(targetVar)
  targetVar.removeEventListener('mousedown', clickEvilHandler)
  targetVar.classList.add('freeze')
  targetVar.firstElementChild.classList.add('kill')
  scoreVar += 100
  score.innerHTML = 'Score:<br>' + scoreVar
  targetVar.firstElementChild.addEventListener('animationend', evilReset)
  return targetVar 
}

//// RESET EVIL FUNCTION
const evilReset = () => {
  event.target.parentElement.removeAttribute('class')
  event.target.classList.remove('kill')
  event.target.parentElement.offsetLeft
  event.target.parentElement.classList.add('fly' + random(2), 'pos' + random(6))
  event.target.parentElement.addEventListener('mousedown', clickEvilHandler)

}

//// EVIL EVADE FUNCTION
const evilEvade = () => {
  scoreVar -= 100
  score.innerHTML = 'Score:<br>' + scoreVar
  document.querySelector('#shield_icon' + shieldVar + '_sprite').classList.add('hidden')
  shieldVar -= 1
  if (shieldVar == 0) {
    endGame() 
  }
  else {
    event.target.removeAttribute('class')
    event.target.firstElementChild.classList.remove('kill')
    event.target.offsetLeft
    event.target.classList.add('fly' + random(2), 'pos' + random(6))
    event.target.addEventListener('mousedown', clickEvilHandler)
  }  
}

//// CLICK METEOR FUNCTION
const clickGoodHandler = () => {
  console.log('click good') 
  soundBad.currentTime = 0
  soundBad.play()
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

//// SHOW PAGE
const showPage = () => {
  console.log('Show Page')
  startScreen.style.display = 'grid'
  startButton.addEventListener('click', startGame)
}

//// GAME STARTED
const startGame = () => {
  console.log('starting game..')
  startScreen.style.display = 'none'  
  soundBG.play()
  shieldVar = 3
  scoreVar = 0
  score.innerHTML = 'Score:<br>' + scoreVar
  evilShipContainer1.classList.add('fly' + random(2), 'pos' + random(6))
  evilShipContainer1.addEventListener('mousedown', clickEvilHandler)
  evilShipContainer1.addEventListener('animationiteration', evilEvade)
  evilShipContainer2.classList.add('fly' + random(2), 'pos' + random(6))
  evilShipContainer2.addEventListener('mousedown', clickEvilHandler)
  evilShipContainer2.addEventListener('animationiteration', evilEvade)
  goodShipContainer.classList.add('fly' + random(2), 'pos' + random(6))
  goodShipContainer.addEventListener('mousedown', clickGoodHandler)
  goodShipContainer.addEventListener('animationiteration', goodReset)  
}

//// GAME RESTART
const restartGame = () => {
  location.replace(location.href)
}

// EVENT LISTENER
window.addEventListener('load', showPage)
