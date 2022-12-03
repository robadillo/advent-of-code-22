const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'assets', 'day-2.txt');

// X for Rock, Y for Paper, and Z for Scissors
// A for Rock, B for Paper, and C for Scissors - First Part
// X LOSE, Y DRAW, Z WIN

// 1 for Rock, 2 for Paper, and 3 for Scissors
// 0 if you lost, 3 if the round was a draw, and 6 if you won

function calculateStrategyOutcome() {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const strategy = data.split('\n');

    let score = 0;
    strategy.forEach(round => {
      roundSplit = round.split(' ');
      // console.log(roundSplit);
      // console.log(evaluateRound(roundSplit[0], roundSplit[1]));
      score += evaluateRound(roundSplit[0], roundSplit[1]);
    });

    console.log('THE SCORE: ', score);

  });  
}


// TODO: REFACTORIZAR 
function evaluateRound(first, shouldResult) {
  switch (first) {
    case 'A':
      switch (shouldResult) {
        case 'X':
          console.log('LOSE');
          return evaluateRoundByTwoHands('A','Z');
        case 'Y':
          console.log('DRAW');
          return evaluateRoundByTwoHands('A','X');
        case 'Z':
          console.log('WIN');
          return evaluateRoundByTwoHands('A','Y');
        default:
          break;
      }
      break;
    case 'B':
      switch (shouldResult) {
        case 'X':
          console.log('LOSE');
          return evaluateRoundByTwoHands('B','X');
        case 'Y':
          console.log('DRAW');
          return evaluateRoundByTwoHands('B','Y');
        case 'Z':
          console.log('WIN');
          return evaluateRoundByTwoHands('B','Z');
        default:
          break;
      }
      break;
    case 'C':
      switch (shouldResult) {
        case 'X':
          console.log('LOSE');
          return evaluateRoundByTwoHands('C','Y');
        case 'Y':
          console.log('DRAW');
          return evaluateRoundByTwoHands('C','Z');
        case 'Z':
          console.log('WIN');
          return evaluateRoundByTwoHands('C','X');
        default:
          break;
      }
      break;
    default:
      break;
  }
}


function evaluateRoundByTwoHands (first, second) {
  switch (first) {
    case 'A':
      switch (second) {
        case 'X':
          console.log('DRAW');
          return 3 + 1;
        case 'Y':
          console.log('WIN');
          return 6 + 2;
        case 'Z':
          console.log('LOSE');
          return 3;
          break;
        default:
          break;
      }
      break;
    case 'B':
      switch (second) {
        case 'X':
          console.log('LOSE');
          return 1;
          break;
        case 'Y':
          console.log('DRAW');
          return 3 + 2;
          break;
        case 'Z':
          console.log('WIN');
          return 6 + 3;
          break;
        default:
          break;
      }
      break;
    case 'C':
      switch (second) {
        case 'X':
          console.log('WIN');
          return 6 + 1;
          break;
        case 'Y':
          console.log('LOSE');
          return 2;
          break;
        case 'Z':
          console.log('DRAW');
          return 3 + 3;
        default:
          break;
      }
      break;
    default:
      break;
  }
}

calculateStrategyOutcome();
