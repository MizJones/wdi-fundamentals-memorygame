var cards = ["queen", "queen", "king1", "king2"];
var cardsInPlay = [];
var cardOne = cards[cards.length - 4];
var cardTwo = cards[cards.length - 3];
var cardThree;
var cardFour
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)

console.log("Player picked" + " " + cardOne + " " + "and then" + " " + cardTwo);

  if (cardsInPlay.length === 2) {
    alert("Yinz picked two!");
  } else {
    alert("Ya Jagoff! Can't you cahhhnt?");
  }


  if (cardOne === cardTwo) {
    alert("Ya gotta match! Rill Nice n'at!");
  } else {
    alert("No deal, Bucky. Try again.");
  }

