const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'assets', 'day-4.txt');

function calculateSet() {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const pairs = data.split('\n');

    let sumOfIntersections = 0;

    pairs.forEach(el => {
      const pair = el.split(',');
      console.log({pair});
      const pairOne = pair[0].split('-');
      const pairTwo = pair[1].split('-');
      console.log({pairOne});
      console.log({pairTwo});
      // comparing pair one as pivot AKA the bigger one
      if (parseInt(pairOne[0]) <= parseInt(pairTwo[0]) && parseInt(pairOne[1]) >= parseInt(pairTwo[1])) {
        console.log('LO CONTIENE')
        sumOfIntersections++;
      // comparing pair two as pivot aka the bigger one
      } else if (parseInt(pairTwo[0]) <= parseInt(pairOne[0]) && parseInt(pairTwo[1]) >= parseInt(pairOne[1])) {
        console.log('LO CONTIENE XX')
        sumOfIntersections++;
      }
    });

    console.log(sumOfIntersections)

  });
}

function calculateOverlap() {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const pairs = data.split('\n');

    let sumOfOverlaps = 0;

    pairs.forEach(el => {
      const pair = el.split(',');
      console.log({pair});
      const pairOne = pair[0].split('-');
      const pairTwo = pair[1].split('-');
      console.log({pairOne});
      console.log({pairTwo});
      // comparing pair one as pivot 
      if (parseInt(pairOne[0]) <= parseInt(pairTwo[0]) && parseInt(pairOne[1]) >= parseInt(pairTwo[0])) {
        console.log('EL UNO LO OVERLAPEA')
        sumOfOverlaps++;
      // comparing pair two as pivot
      } else if (parseInt(pairTwo[0]) <= parseInt(pairOne[0]) && parseInt(pairTwo[1]) >= parseInt(pairOne[0])) {
        console.log('EL DOS LO OVERLAPEA')
        sumOfOverlaps++;
      }
    });

    console.log(sumOfOverlaps)

  });
}

// calculateSet();
calculateOverlap();