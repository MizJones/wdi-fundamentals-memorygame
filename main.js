var cards = [
{
rank: 'queen',
suit: 'heart',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-heartss.png'
},
{
rank: 'king',
suit: 'heart',
cardImage: 'images/king-of-diamonds.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-heartss.png'
}
];

var cardsInPlay = [];

function flipCard (cardId) {
var cardOne = cards[cards.length - 4];
var cardTwo = cards[cards.length - 3];
cardsInPlay.push(cards[cardId].rank);
cardsInPlay.push(cardTwo);
console.log(cardOne + " " + cardTwo + "length" + cardsInPlay.length);

if (cardsInPlay.length === 2) {
 alert("Two cards picked");
 console.log("User flipped" + cards[cardsId].rank);
} else {
console.log("Pick two cards");
}


if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}




  
