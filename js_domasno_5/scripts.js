let createArray = (arrayLength) => {
    let emptyArray = [];
    for (let i = 1; i <= arrayLength; i++){
      emptyArray.push(i);
    }
    return emptyArray;
  }
  console.log(createArray(5));
  
  let getFirstValue = (inputArray) => inputArray[0];
  let getFirstValueShift = (inputArray) => inputArray.shift();
  
  console.log(getFirstValue([1,2,3,4,5]));
  console.log(getFirstValueShift([2,4,6,5,7,8]));
  
 
  console.log('============================================================');
  
  let reverse = (inputArray) => {
    let outputArray = [];
    for (let i = inputArray.length-1; i>=0; i--){
      outputArray.push(inputArray[i]);
    }
    return outputArray;
  }
  
  console.log(reverse([2,3,4,5]));
  
  
  console.log('============================================================');
  
  let search = (inputArray, searchItem) => {
    let foundFlag = -1;
    for(let i = 0; i<=inputArray.length - 1; i++){
      if (inputArray[i] === searchItem){
        foundFlag = i;
      }
    }
    return foundFlag;
  };
  
  let searchItem = 2;
  let searchArray = [2,5,5,4,6,8];
  console.log(`[${searchArray}], ${search(searchArray, searchItem)}`);
  

  console.log('============================================================');
  
  let check = (inputArray, searchItem) => {
    let foundFlag = false;
    for(let i = 0; i<=inputArray.length - 1; i++){
      if (inputArray[i] === searchItem){
        foundFlag = true;
      }
    }
    return foundFlag;
  };
  
  console.log(check([1, 2, 3, 4, 5], 3));
  console.log(check([1, 1, 2, 1, 1], 3));
  console.log(check([5, 5, 5, 6], 5));
  console.log(check([], 5));
  

  console.log('============================================================');
  
  let negate = (inputArray) => {
    for (let i = 0; i<= inputArray.length - 1;i++){
      inputArray[i] *= -1;
    }
    return inputArray;
  }
  console.log(negate([1, 2, -3, 4, -5]));
  console.log(negate([]));
  

  console.log('============================================================');
  
  let diffMaxMin = (thisArray) => {
  let largest = thisArray[0];
  let smallest = thisArray[0];
  let difference;
  
    for (let i = 0; i<=thisArray.length - 1; i++){
      if (thisArray[i]>largest) {
        largest = thisArray[i];
      }
      if (thisArray[i]<smallest) {
        smallest = thisArray[i];
      }
    difference = largest - smallest;
    };
  return difference;
  }
  
  console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
  

  console.log('============================================================');
  
  let MultiplyByLength = (inputArray) => {
    let inputArrayLength = inputArray.length;
  
    for (let i = 0; i<= inputArrayLength - 1; i++) {
      inputArray[i] *= inputArrayLength;
    }
    return inputArray;
  };
  
  console.log(MultiplyByLength([2,3,4]));
  console.log(MultiplyByLength([1, 0, 3, 3, 7, 2, 1]));
  console.log(MultiplyByLength([2,3,4]));
  
  
  console.log('============================================================');
  
  let hurdleJump = (inputArray, height) => {
    let jumperFlag = true;
    for (let i = 0; i <= inputArray.length; i++){
      if (inputArray[i] > height){
        jumperFlag = false;
      }
    }
    return jumperFlag;
  }
  
  console.log(hurdleJump([1, 2, 3, 4, 5], 5));
  console.log(hurdleJump([5, 5, 3, 4, 5], 3));
  console.log(hurdleJump([5, 4, 5, 6], 10));
  console.log(hurdleJump([1, 2, 1], 1));
  
  
  console.log('============================================================');
  
  let countdown = (arrayLength) => {
    let returnArray = [];
    for (let i = arrayLength; i>=0; i--) {
      returnArray.push(i);
    }
    return returnArray;
  }
  
  console.log(countdown(5));
  console.log(countdown(7));
  console.log(countdown(3));
  
  console.log('============================================================');
  
  let transform = (inputArray) => {
    for (let i = 0; i<= inputArray.length - 1; i++) {
      if (inputArray[i]%2 === 0) {
        inputArray[i] -= 1;
      } else {
        inputArray[i] += 1;
      }
  } 
  return inputArray;
  };
  
  console.log(transform([1, 2, 3, 4, 5]));
  console.log(transform([3, 3, 4, 3]));
  console.log(transform([2, 2, 0, 8, 10]));  