// https://www.interviewcake.com/question/single-rifle-check?utm_source=weekly_email

// 1) shuffled deck
// 2) cutting deck - 26 cards each
// 3) for loop
//   range => 0 to half1.length
//   grab random number from range
//   slice each half (0, random num
//   continue until half1 and half 2 are empty

var cards = [
 "H1", "H2", "H3",  "H4",  "H5",  "H6", "H7",
 "H8", "H9", "H10", "H11", "H12", "H13",
 "C1", "C2", "C3",  "C4",  "C5",  "C6", "C7",
 "C8", "C9", "C10", "C11", "C12", "C13",
 "S1", "S2", "S3",  "S4",  "S5",  "S6", "S7",
 "S8", "S9", "S10", "S11", "S12", "S13",
 "D1", "D2", "D3",  "D4",  "D5",  "D6", "D7",
 "D8", "D9", "D10", "D11", "D12", "D13"
]



var arrayShuffled = [];

function shuffleCards (arr) {
  var shuffledArray = [];
  var usedIndex = [];
  var max = arr.length;

  //continue until array is empty
  while (array.length) {
    //generate random number
    var randomNumber =  Math.floor(Math.random() * (max-0));
    //test to see if you've used that random number before
    if (usedRandomNumbers.indexOf(randomNumber) === -1) {
      //pop off a single card
      shuffledArray[randomNumber] = arr.pop();
      //add used random number to array
      usedRandomNumbers.push(randomNumber);
    }
  }
  return shuffledArray;
}

function createHalves(arr) {
  // given an array of cards, return two halves

  var halfArray =[];

  // cards 0 to 26
  var firstHalf = cards.splice(26);
  // cards 26 to 52
  var secondHalf = cards;

  // add halves to array
  halfArray.push(firstHalf);
  halfArray.push(secondHalf);

  // return array of arrays
  return halfArray.push()

}

function riffleCards() {
  // Given Halves of cards, return an array of "riffled" cards

  var riffledCardArray = [];
  var deckChoice = Math.floor(Mathrandom()*2); //0 or 1
  var half1 = arrOfArrays[0];
  var half2 = arrOfArrays[1];

  // continue until BOTH halves are empty
  while (half1.length || half2.length) {
  // if deckChoice is 0, use half1
    if (deckChoice === 0) {
      // if deckchoice is 0, reassign to -1 WHY?
      deckChoice = 1;
      var tempArray = half1.splice(0, Math.floor(Math.random()*26));
      for (var i = 0; i < tempArray.length; i++) {
        riffledCardArray.push(tempArray[i]);
      }
    } else {
      // if deckchoice is 1, reassign to 0 - WHY?
      deckChoice = 1;

      var tempArray2 = half2.splice(0, )
    }
  }
      var randNum =
    }
  // while loop for half1
    // get random number (from 0 to half1.length)
    // remove cards (based on that random number)
    // add cards for new array (add cards to array)

  // while loop for half2
    // get random number from ) to half2.length
    // remove cards (based on that random number
    // add cards to new array (add cards to array)


}

// Invocation

var initialShuffled = shuffleCards(cardArray);
var splitDeckARray = createHalves(initialShuffled);


// for (var i = 0; i < firstHalf.length; i++) {
//     var randomNum = Math.floor * (Math.random() * firstHalf)
//     firstHalf.splice
