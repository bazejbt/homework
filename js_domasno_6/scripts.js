console.log('-= Task 01 =-');
let student = {
  name: 'Alexandar Savage',
  sclass: 'IX',
  rollno: 11
}

let printObject = (sampleObj) => {
  for (let [key, value] of Object.entries(sampleObj)) {
    console.log(`${key} : ${value}`);
  }
}
printObject(student);

console.log('-= Task 02 =-');

let deleteProp = (sampleObj, prop) => {
  for (let [key] of Object.entries(sampleObj)) {
    if (key === prop){
      delete sampleObj[key];
    }
  }
}
console.log(student);
deleteProp(student, 'name');
console.log(student);


console.log('-= Task 03 =-');

let student2 = {
  name: 'David Ravvy',
  sclass: 'VI',
  rollno: 12
}

let checkProp = (sampleObj, prop) => {
  let returnMessage;
  for (let [key] of Object.entries(sampleObj)) {
    console.log(key);
    console.log(prop);
    if (key === prop) {
      returnMessage = `Prop ${prop} found!`
      break;
    } else {
      returnMessage = 'Prop not found!'
    }
  }
  return returnMessage;
}
console.log(checkProp(student2, 'name'));


console.log('-= Task 04 =-');


let car = {
  model: 'Fiat',
  color: 'Green',
  year: 2018,
  fuel: 'Diesel',
  fuelConsumptionPer100: 21,
  howMuchFuel: function(inputKM){
    let fuelNeeded = inputKM/100 * this.fuelConsumptionPer100;
    return `You need ${fuelNeeded} liters to pass ${inputKM} km.`
  }
}

console.log(car.howMuchFuel(40));


console.log('-= Homework 01 =-');

let dog = {
  name: 'Lora',
  kind: 'Maltese',
  speak: function() {
    let speech = prompt('What does the dog say?');
    return `Dog says: ${speech}!`;
  }
}

let word = dog.speak();
console.log(word);
