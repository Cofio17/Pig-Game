'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const btnNewGame = document.querySelector('.btn--new');
  const btnRollDice = document.querySelector('.btn--roll');
  const btnHoldGame = document.querySelector('.btn--hold');

  let playerOneScoreTotal = document.getElementById('score--0');
  let playerTwoScoreTotal = document.getElementById('score--1');
  let playerOneScoreCurrent = document.getElementById('current--0');
  let playerTWoScoreCurrent = document.getElementById('current--1');
  let diceImage = document.querySelector('.dice');
  let sectionOfPlayers = document.querySelectorAll('section');
  let playersArray = Array.from(sectionOfPlayers);
  const activePlayer = 'player--active';
  const displayNone = 'display-none';
  diceImage.classList.add(displayNone);

  let scoreOne = 0;
  let scoreTwo = 0;
  let scoreTotalOne = 0;
  let scoreTotalTwo = 0;

  const switchPlayers = () => {
    playersArray.forEach(player => {
      player.classList.toggle(activePlayer);
    });
  };

  const activePlayerF = () => {
    return playersArray.findIndex(el => el.classList.contains(activePlayer));
  };

  const diceHandling = () => {
    diceImage.classList.remove(displayNone);
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceString = `dice-${randomNumber}.png`;
    diceImage.setAttribute('src', diceString);
    return randomNumber;
  };

  const resetCurrentScore = () => {
    const activeIndex = activePlayerF();

    if (activeIndex === 0) {
      scoreOne = 0;
      playerOneScoreCurrent.textContent = scoreOne;
    } else {
      scoreTwo = 0;
      playerTWoScoreCurrent.textContent = scoreTwo;
    }
  };

  const RollDiceRefactor = () => {
    const randomNumber = diceHandling();
    const activeIndex = activePlayerF();

    if (randomNumber === 1) {
      resetCurrentScore();
      switchPlayers();
    } else {
      document.getElementById(`current--${activeIndex}`).textContent =
        activeIndex === 0
          ? (scoreOne += randomNumber)
          : (scoreTwo += randomNumber);
    }
  };

  const HoldGameRefactor = () => {
    const activeIndex = activePlayerF();

    activeIndex === 0
      ? (playerOneScoreTotal.textContent = scoreTotalOne += scoreOne)
      : (playerTwoScoreTotal.textContent = scoreTotalTwo += scoreTwo);

    if (scoreTotalOne >= 50 || scoreTotalTwo >= 50) {
      alert(scoreTotalOne >= 50 ? 'Player One Wins!' : 'Player 2 Wins!');
      scoreOne = 0;
      scoreTwo = 0;
      NewGame();
      resetScores();
      return;
    }
    resetCurrentScore();
    switchPlayers();
    diceHandling();
  };

  const NewGame = () => {
    resetScores();
    sectionOfPlayers[0].classList.add(activePlayer);
    sectionOfPlayers[1].classList.remove(activePlayer);
    diceImage.classList.add(displayNone);
  };

  function resetScores() {
    scoreTotalOne = 0;
    scoreTotalTwo = 0;
    playerOneScoreCurrent.textContent = 0;
    playerTWoScoreCurrent.textContent = 0;
    playerOneScoreTotal.textContent = 0;
    playerTwoScoreTotal.textContent = 0;
  }

  btnNewGame.addEventListener('click', NewGame);
  btnRollDice.addEventListener('click', RollDiceRefactor);
  btnHoldGame.addEventListener('click', HoldGameRefactor);
});

//    const RollDice = ()=>{
//     const randomNumber = Math.floor(Math.random()*6)+1;
//     const diceString = `dice-${randomNumber}.png`;
//     diceImage.setAttribute('src',diceString);

//     let playerNotActive = playersArray.filter((pl) => {
//         return !pl.classList.contains(activePlayer);
//     });

//     for (const player of sectionOfPlayers) {

//         if (player.classList.contains(activePlayer)) {
//             if (randomNumber===1) {
//                 document.getElementById(`current--${playersArray.indexOf(player)}`).textContent =
//                  playersArray.indexOf(player)=== 0? scoreOne=0:scoreTwo=0 ;
//                 player.classList.toggle(activePlayer);
//                 playerNotActive[0].classList.toggle(activePlayer);

//             }
//             else{
//                 document.getElementById(`current--${playersArray.indexOf(player)}`).textContent =
//                 playersArray.indexOf(player) === 0? scoreOne+=randomNumber:scoreTwo+=randomNumber;
//             }

//         }
//     }
//     };

// const HoldGame = (scoreOnef,scoreTwof)=>{
//     let playerNotActive = playersArray.filter((pl) => {
//         return !pl.classList.contains(activePlayer);
//     });

// for (const player of playersArray) {
//     if(player.classList.contains(activePlayer)){
//         let activeIndex = playersArray.indexOf(player);
//         activeIndex === 0? playerOneScoreTotal.textContent = scoreTotalOne+=scoreOnef:
//         playerTwoScoreTotal.textContent = scoreTotalTwo+=scoreTwof
//         player.classList.toggle(activePlayer);
//         playerNotActive[0].classList.toggle(activePlayer);

//        if(activeIndex === 0 ){
//         scoreOne = 0;
//         playerOneScoreCurrent.textContent = scoreOne;
//        }
//        else {
//         scoreTwo = 0;
//         playerTWoScoreCurrent.textContent = scoreTwo;
//        }

//     }
// }

// }
