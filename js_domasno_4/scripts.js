let arrayLength;
let userArray = [];
let allSameFlag = 1;


let findLargest = (inputArray) => {
    
  let largest = inputArray[0];

for (let i = 0; i<= inputArray.length - 1; i++) {

  if (inputArray[i] > largest) {

    largest = inputArray[i];

    allSameFlag = 0;

  };

  console.log(largest);

};

return largest;

}


while (isNaN(arrayLength)){ 

  arrayLength = parseInt(prompt('Enter how many numbers you wish to compare... '));

  };
  
  for (let i = 0; i<arrayLength;i++){

    let userInput;

    while (isNaN(userInput)){ 

      userInput = parseInt(prompt(`Enter a number... `));

      };

    userArray.push(userInput);

  };


if (allSameFlag === 1) {

  console.log(`All the numbers in the ${userArray} array are the same.`)

} else {

  console.log(`${findLargest(userArray)} is the largest number in the [${userArray}] array.`);

}