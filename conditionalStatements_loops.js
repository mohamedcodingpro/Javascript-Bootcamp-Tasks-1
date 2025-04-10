// Exercise 1: Temperature check
let temperature = 20;

// if-else version
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// switch version
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility Check
let number = 6;

// if-else version
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// switch version
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// 3
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log(total);

// 4
const numbers1 = [1, 2, 3, 4, 5];
for (let num of numbers1) {
    console.log(num);
}

// 5
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let num of numbers2) {
    if (num > largest) largest = num;
}
console.log(largest);

// Exercise 4: While loops
// 1
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2
i = 1;
while (i <= 20) {
    if (i % 2 === 0) console.log(i);
    i++;
}

// 3
total = 0;
i = 1;
while (i <= 100) {
    total += i;
    i++;
}
console.log(total);

// 4
i = 5;
while (i < 50) {
    console.log(i);
    i += 5;
}

// Exercise 5: Do While loops
// 1
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2
total = 0;
i = 1;
do {
    total += i;
    i++;
} while (i <= 100);
console.log(total);

// 3
/*
let userInput;
do {
    userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);
*/

// 4
/*
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== secretNumber);
console.log("Congratulations! You guessed the correct number.");
*/