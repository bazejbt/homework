
let minToSecConvert = (mins) => mins * 60;

console.log('-= Task 01 =-');

console.log(minToSecConvert(5));
console.log(minToSecConvert(3));


console.log('-= Task 02 =-');

let addition = (num) => num + 1;
console.log(addition(9)); 
console.log(addition(-3)); 

console.log('-= Task 03 =-');

let hourToSec = (hours) => hours * 3600;
console.log(hourToSec(2)); 
console.log(hourToSec(4));


console.log('-= Task 04 =-');

let remainder = (firstNumber, secondNumber) => firstNumber % secondNumber;
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));


console.log('-= Task 05 =-');

let legCounter = (chickens = 0, cows = 0, pigs = 0) => (pigs*4)+(chickens*2)+(cows*4);
console.log(legCounter(2, 3, 5));
console.log(legCounter(1, 2, 3));

console.log('-= Task 06 =-');

let compare = (firstWord = "", secondWord = "") => firstWord.length === secondWord.length;
console.log(compare("AB", "CD"));
console.log(compare("ABC", "DE"));
console.log(compare("hello", "sedc"));

console.log('-= Task 07 =-');

let isPlural = (inputWord) => inputWord.endsWith('s');

console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("magic"));

console.log('-= Task 08 =-');

let match = (firstWord, secondWord) =>  firstWord.toLowerCase() === secondWord.toLowerCase();

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));

console.log('-= Task 09 =-');

let monthName = (monthNumber) => {
  switch (monthNumber) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return 'No such month.';
  }
};

console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));




console.log('-= Task 10 =-');

let isTruthy = (input) => {
  if (input) {
    return 1;
  } else {
    return 0;
  }
}

console.log(isTruthy(0));
console.log(isTruthy(false));
console.log(isTruthy(""));
console.log(isTruthy("false"));