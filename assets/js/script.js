//three actions can be taken; the card can be flipped, we pick 2 cards - thus we have 3 variables

let cardFlipped = false;
let firstCard, secondCard; // these 2 variables can vary because it depends on what card you click on, thus they are not declared

let lock = false; // this variable is created to lock the board so that when a user spam clicks, no false matches are made

//When I click on a card I want it to run a function
var game = $(".card").click(function () {
  if (lock) return;
  if (this === firstCard) return; // this has been created to prevent matches with a  double click

  // the card must first be flipped
  this.classList.add("flip");

  if (!cardFlipped) {
    // On first click, a card is flipped and the first card is the card we are currently on
    cardFlipped = true;
    firstCard = this;
  } else {
    //on the second click, a card is flipped and the second card is the card we are currently on
    secondCard = this;

    matchCheck();
  }
});

function matchCheck() {
  //We need to check if the cards match
  if (firstCard.dataset.match === secondCard.dataset.match) {
    // then we need to turn off the click event listener for the first card and the second card
    cardDisable();
  } else {
    //if the cards do not match the cards get flipped back over this has to happen in a certain time period
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

    resetBoard();
  }, 1500);
}

function resetBoard() {
  cardFlipped = false;
  lock = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle(){
    $(".cards").forEach(_card => {
    let positionShuffle = Math.floor(Math.random()* 18); 
    $('.card').style.order = positionShuffle; 
    });
})();
