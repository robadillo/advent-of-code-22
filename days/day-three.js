const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'assets', 'day-3.txt');

function calculatePriorities() {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const rucksacks = data.split('\n');
    // console.log(rucksacks);

    let sumOfPriorities = 0;
    rucksacks.forEach(el => {
      const partOne = el.substring(0, el.length/2);
      const partTwo = el.substring(el.length/2);

      const coincidence = partOne.split('').filter(letter => partTwo.includes(letter));

      // console.log(el)
      console.log({partOne})
      console.log({partTwo})
      console.log(coincidence[0])
    
      const priority = (coincidence[0].charCodeAt(0) - 96 < 1) ? coincidence[0].charCodeAt(0) - 38 : coincidence[0].charCodeAt(0) - 96;
      sumOfPriorities += priority;
      console.log({priority})
    });
    console.log(sumOfPriorities)

  });
}

function calculatePrioritiesPerGroup() {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const rucksacks = data.split('\n');

    let sumOfPriorities = 0;

    for (let index = 0; index <= rucksacks.length - 3; index+=3) {
      const pivot = rucksacks[index];
      const coincidence = pivot.split('').filter(char =>{
        return rucksacks[index+1].includes(char) && rucksacks[index+2].includes(char);
      });
      const priority = (coincidence[0].charCodeAt(0) - 96 < 1) ? coincidence[0].charCodeAt(0) - 38 : coincidence[0].charCodeAt(0) - 96;
      sumOfPriorities += priority;
    }

    console.log(sumOfPriorities)

  });
}

// calculatePriorities();
calculatePrioritiesPerGroup();
