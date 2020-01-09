let firstNumber;
let secondNumber;

firstNumber = parseFloat(prompt('Please enter the first number... '));
secondNumber = parseFloat(prompt('Please enter the second number... '));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log('You need to enter two numbers!');
} else {
  if (firstNumber > secondNumber) {

    console.log(`The first number (${firstNumber}) is greater than the second number (${secondNumber})`);

  } else if (firstNumber < secondNumber){

    console.log(`The first number (${firstNumber}) is lesser than the second number (${secondNumber})`);

  } else {

    console.log(`The first number (${firstNumber}) is equal to the second number (${secondNumber})`);

  }
  
};

