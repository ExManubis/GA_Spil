// GLOBAL CONSTANTS
const goodShipContainer = document.querySelector('#good_ship_container')
const goodShipSprite = document.querySelector('#good_ship_sprite')
const evilShipContainer = document.querySelector('#evil_ship_container')
const evilShipSprite = document.querySelector('#evil_ship_sprite')
const score = document.querySelector('#score')
const shield = document.querySelector('#life_board')
const time = document.querySelector('#time')

// EVENT LISTENERS
window.addEventListener('load', showPage);

// GLOBAL FUNCTIONS
function showPage() {
  console.log('Show Page')
  startGame()
  
  // GAME STARTED
  function startGame() {
    console.log('starting game..')
    let shieldVar = 100
    let scoreVar = 0
    score.textContent = 'Score: ' + scoreVar
    shield.textContent = shieldVar + '%'
    evilShipContainer.classList.add('fly')
    evilShipContainer.classList.add('pos1')
    evilShipContainer.addEventListener('click', clickEvilHandler)
    
    // EVIL SHIP 
    function clickEvilHandler() {
      console.log('klik')
      evilShipContainer.removeEventListener('click', clickEvilHandler)
      evilShipContainer.classList.add('freeze')
      evilShipSprite.classList.add('kill')
      evilShipSprite.addEventListener('animationend', evilReset)
  }

    function evilReset() {
      evilShipContainer.classList.remove('fly')
      evilShipContainer.classList.remove('pos1')
      evilShipContainer.classList.remove('freeze')
      evilShipSprite.classList.remove('kill')
      evilShipContainer.offsetLeft
      evilShipContainer.classList.add('fly')
      evilShipContainer.classList.add('pos2')
      evilShipContainer.addEventListener('click', clickEvilHandler)
    }
}


  }

// TIME
let timeVar = 60
time.textContent = "Time: " + timeVar

