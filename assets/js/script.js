let cardFlipped = false;
let firstCard, secondCard; 
/** this variable is created to lock the board so that when a user spam clicks, no false matches are made*/ 
let lock = false; 

$(".card").click(function () {
/**this has been created to prevent matches with a  double click*/  
    if (lock) return;

/**add the 'flip' class to the firstCard clicked*/
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

/**This function has been created to prevent cards from being unflipped while other cards are being shown*/
    cardDisable();
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
/**This was to lock the board so that no cards can be flipped while other cards are exposed to the user*/
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}
/**cards wont be able to be clicked on and won't rotate */
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

/** These functions are used to init a new game */
function initNewGame(){
    // setup game vars and cards
let cardFlipped = false;
let firstCard, secondCard = [undefined,undefined]; 
let lock = false; 
var moves = 0;
document.getElementById("score").innerHTML = moves;
}

function endGame(){
    // clean game vars and remove cards
$('.board > div').removeClass("flip");
$(firstCard).on("click");
$(secondCard).on("click");
(function shuffle() {
  $(".card").each(function () {
    let positionShuffle = Math.floor(Math.random() * 18);
    this.style.order = positionShuffle;
  });
})();
}

function newOrReset(){
    endGame();
    initNewGame();
};