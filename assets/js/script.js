let cardFlipped = false;
let firstCard, secondCard; 
/** this variable is created to lock the board so that when a user spam clicks, no false matches are made*/ 
let lock = false; 

$(".card").click(function () {
  if (lock) return;// this has been created to prevent matches with a  double click

  /**I add the 'flip' class to the firstCard clicked*/
  if (this === firstCard) return; 
  this.classList.add("flip"); 

  /**On first click, a card is flipped */ 
  if (!cardFlipped) {
    cardFlipped = true;
    firstCard = this;
  } else {
    /**on the second click, a different card is flipped*/
    secondCard = this;
    /**the score will increase by 1 and a match will be checked */
    points();
    matchCheck();
  }
});

/**matchCheck checks if the data-match attribute of the 2 cards are the same */
function matchCheck() {
  if (firstCard.dataset.match === secondCard.dataset.match) {

/**This function has been created to to prevent cards from being unflipped whiled other cards are being shown*/
    cardDisable();
    // NEEDS TO PLAY A SOUND LIKE 'TING.WAV'
  } else {
/**This function was created to unflip the cards if there has been a flase match*/
    unflip();
  }
}

function cardDisable() {
  $(firstCard).off("click");
  $(secondCard).off("click");
  resetBoard();
}

function unflip() {
  lock = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
/**This was to lock the board so that no cards can be flipped while other cards are exposed to the user*/
    resetBoard();
  }, 1500);
}

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


/**this function was created so that a score can be held of how the player is progressing through the game */ 
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
const length = array.length < 10 ? array.length : 10;
let length = array.length;
if (length > 10) {
    length = 10;
}

local storage
*/