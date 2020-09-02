let cardFlipped = false;
let firstCard, secondCard;

// this variable is created to lock the board so that when a user spam clicks, no false matches are made
let lock = false;
var moves = 0;

/**
 * This click function adds the flip class to the first and second card you click.
 * then increases the score by 1 and checks if the cards match
 */
$(".card").click(function () {
  //this has been created to prevent matches with a  double click
  if (lock) return;
  //this has been added to prevent cards matching with themselves
  if (this === firstCard) return;

  this.classList.add("flip");
  if (!cardFlipped) {
    cardFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    points();
    matchCheck();
  }
});

/**
 * matchCheck checks if the data-match attribute of the 2 cards are the same.
 * if the firstCard and the secondCard match then the cards are disabled and can not be flipped over.
 * if the firstCard and the secondCard do not match then the cards are unfliped.
 */
function matchCheck() {
  if (firstCard.dataset.match === secondCard.dataset.match) {
    cardDisable();
  } else {
    unflip();
  }
}

/**
 * cardDisable has been created to disabling their click function.
 */
function cardDisable() {
  $(firstCard).off("click");
  $(secondCard).off("click");
  resetBoard();
}

/**
 * This function was created to unflip the cards if there has been a flase match
 */
function unflip() {
  //This was to lock the board so that no cards can be flipped while other cards are exposed to the user
  lock = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}
/**
 * resetBoard resets the variables to default
 */
function resetBoard() {
  cardFlipped = false;
  lock = false;
  firstCard = null;
  secondCard = null;
}

/**
 * As soon as the page loads the divs with the class "card" are given a random number between 0 and 18 and then ordered
 */
(function shuffle() {
  $(".card").each(function () {
    let positionShuffle = Math.floor(Math.random() * 18);
    this.style.order = positionShuffle;
  });
})();

/**
 * this function was created so that a score can be held of how the player is progressing through the game
 */
function points() {
  moves += 1;
  document.getElementById("score").innerHTML = moves;
}
