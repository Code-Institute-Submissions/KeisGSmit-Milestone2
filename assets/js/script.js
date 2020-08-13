//three actions can be taken; the card can be flipped, we pick 2 cards - thus we have 3 variables

let cardFlipped = false;
let firstCard, secondCard; // these 2 variables can vary because it depends on what card you click on, thus they are not declared

let lock = false; // this variable is created to lock the board so that when a user spam clicks, no false matches are made 

//When I click on a card I want it to run a function
var game = $(".card").click(function () {
if(lock) return; 

  // the card must first be flipped
  this.classList.add("flip");

  if (!cardFlipped) {
    // On first click, a card is flipped and the first card is the card we are currently on
    cardFlipped = true;
    firstCard = this;
  } else {
    //on the second click, a card is flipped and the second card is the card we are currently on
    cardFlipped = false;
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
}

function unflip() {
lock=true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    lock = false;
  }, 1500);
}
