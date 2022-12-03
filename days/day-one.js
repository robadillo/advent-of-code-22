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
    for (let j = 0; j < 3; j++) {
      var indexOfMax = elves.indexOf(Math.max(...elves));
      // console.log(Math.max(...elves));
      top += elves[indexOfMax];
      elves.splice(indexOfMax, 1);
      // console.log(top);
    } 

    console.log('Sum of top Three: ', top);
  });  
}

calculateElvesCalories();
