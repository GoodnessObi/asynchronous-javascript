/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, prevScore, activePlayer, gamePlaying, finalScore;
let input = document.querySelector('#final-score');

input.addEventListener('change', function() {
  finalScore = input.value;
})

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
    //Disable input once game is on
    input.disabled = true;
    document.querySelector('.form').classList.add('score-set');

    // 1. Random Number 
    //random integer between 1 and 6
    let diceRandomOne =Math.floor(Math.random() * 6) +1;
    let diceRandomTwo =Math.floor(Math.random() * 6) +1;

    // 2. Display the result
    let diceOne = document.querySelector('.dice-1');
    let diceTwo = document.querySelector('.dice-2');
    diceOne.style.display = 'block';
    diceTwo.style.display = 'block';
    
    diceOne.src = `dice-${diceRandomOne}${'.png'}`;
    diceTwo.src = `dice-${diceRandomTwo}${'.png'}`;

    // 3. Update the roundScore if the rolled number is not 1
    if (diceRandomOne !== 1 && diceRandomTwo !==1) {
      //add score
      roundScore += diceRandomOne + diceRandomTwo;
      document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
      //Next player
      nextPlayer();
    }
  }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
     //Disable input once game is on
     input.disabled = true;
     document.querySelector('.form').classList.add('score-set');

    //Add current score to global score
    scores[activePlayer] += roundScore

    //Update the UI
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

    //Check if player won the game
    if (scores[activePlayer] >= finalScore) {
      document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
      document.querySelector('.dice-1').style.display = 'none';
      document.querySelector('.dice-2').style.display = 'none';
      document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
      document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
      gamePlaying = false;
    } else {
      //Next Player
      nextPlayer();
    }
  } 
})

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice-1').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  prevScore = 0;
  finalScore = 100;
  roundScore = 0;
  activePlayer = 0;
  gamePlaying= true;
  input.disabled = false;

  input.value = finalScore
  
  document.querySelector('.form').classList.remove('score-set');
  document.querySelector('.dice-1').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Palyer 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
