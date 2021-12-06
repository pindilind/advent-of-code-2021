const fs = require('fs/promises');

const inputPromise = fs.readFile('./input.txt', 'utf-8');

//definerar funktionen först (arrowfunktion)
const handleStringResult = (result) => {

  const numberStrings = result.split('\r\n');
  console.log(numberStrings);

  const numbers = numberStrings.map(nbrString => {
    let nbr;

    //try/catch för number-converteringen (nu har vi en array med nummer)
    try {
      nbr = Number.parseInt(nbrString);
    } catch (error) {
      console.error(error);
    }

    return nbr;
  });

  console.log(numbers);

  let numberOfTimesDepthIncreased = 0;

  for (let i = 0; i < numbers.length-1; i++) {
    const numberOne = numbers[i]
    const numberTwo = numbers[i +1]
    console.log(numberOne, numberTwo)

    //numberOfTimesDepthIncreased++ , ökar 
    if(numberOne < numberTwo) {
      numberOfTimesDepthIncreased++;
    } 
  }
  console.log(numberOfTimesDepthIncreased)
}

inputPromise
  .then(result => {
    handleStringResult(result);
  })
  .catch(error => {
    console.log(error);
  });

/* ^^^^^ CORRECT ANSWER PART 1^^^^^ */
/* GOLDER STAR | * |  */

