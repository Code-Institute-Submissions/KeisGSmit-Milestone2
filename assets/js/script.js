/**three actions can be taken; the card can be flipped and we pick 2 cards (they can vary) - thus we have 3 variables**/
let cardFlipped = false;
let firstCard, secondCard; 

let lock = false; // this variable is created to lock the board so that when a user spam clicks, no false matches are made

$(".card").click(function () {
  if (lock) return;// this has been created to prevent matches with a  double click

  if (this === firstCard) return; 
  // the card must first be flipped
  this.classList.add("flip");

  if (!cardFlipped) {
    // On first click, a card is flipped and the first card is the card we are currently on
    cardFlipped = true;
    firstCard = this;
  } else {
    //on the second click, a card is flipped and the second card is the card we are currently on
    secondCard = this;
    // this function was created so that a score can be held of how the player is progressing through the game
    points();
    matchCheck();
    
  }
});

function matchCheck() {
  //We need to check if the cards match
  if (firstCard.dataset.match === secondCard.dataset.match) {
    // then we need to turn off the click event listener for the first card and the second card

    cardDisable();
    // NEEDS TO PLAY A SOUND LIKE 'TING.WAV'
  } else {
    //if the cards do not match the cards get flipped back over this has to happen in a certain time period
    
    unflip();
  }
}

//This function has been created to to prevent cards from being unflipped whiled other cards are being shown
function cardDisable() {
  $(firstCard).off("click");
  $(secondCard).off("click");

  resetBoard();
}

//This function was created to unflip the cards if there has been a flase match
function unflip() {
  lock = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}
//This was to lock the board so that no cards can be flipped while other cards are exposed to the user
function resetBoard() {
  cardFlipped = false;
  lock = false;
  firstCard = null;
  secondCard = null;
}


/**As soon as the page loads the divs with the class "card" are given a random number between 0 and 18 and then ordered */
(function shuffle() {
  $(".card").each(function () {
    let positionShuffle = Math.floor(Math.random() * 18);
    this.style.order = positionShuffle;
  });
})();

//This is the function which will increase the score of the player as they play the game 
var moves = 0;

function points() {
  moves += 1;
  document.getElementById("score").innerHTML = moves;
};
/** Now we want to incorporate a high score system
 * when the new game button is clicked, 
 * the score value has to be saved by puttin it in a array 
 * if the score is < 8 it will not be saved - to prevent 0 being a highscore and incomplete games being counted towards high scores
 * the array has to be ordered in a decreasing order:
 * [small number.....big number]
 * the first 10 items need to be put in individual <li>tags</li> 
 * and be put into <ol id="HighScores"></ol>
 * 
 * const length = array.length < 10 ? array.length : 10;
let length = array.length;
if (length > 10) {
    length = 10;
}

local storage
*/