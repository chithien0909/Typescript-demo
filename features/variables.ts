let apples = 5;
let speed: string = 'fast';

let nothingMuch: null = null;

let now: Date = new Date();

// Array

let colors: string[] = ['read', 'green', 'blue'];

let myNumbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, false, true];

class Car {}

let car: Car;

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(5);

// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';

const coordinated: { x: number; y: number } = JSON.parse(json);

console.log(coordinated);

// 2) When we declare a variable on one line
// and initalizate it later

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
console.log(foundWord);

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

console.log(numberAboveZero);
