const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'assets', 'day-1.txt');

function calculateElvesCalories() {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const arrayOfCalories = data.split('\n');
    const elves = [];
    let elfCalories = 0;
    for (let index = 0; index < arrayOfCalories.length; index++) {
      if (arrayOfCalories[index]) {
        elfCalories += parseInt(arrayOfCalories[index]);
      } else {
        elves.push(elfCalories);
        elfCalories = 0;
      }
    }
  
    // First Question
    console.log('Max Calories: ', Math.max(...elves));

    let top = 0;
    const numOfTop = 3;
    for (let j = 0; j < numOfTop; j++) {
      var indexOfMax = elves.indexOf(Math.max(...elves));
      top += elves[indexOfMax];
      elves.splice(indexOfMax, 1);
    } 

    // Second question
    console.log('Sum of top Three: ', top);
  });  
}

calculateElvesCalories();
