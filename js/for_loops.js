"use strict";
// Create a function named showMultiplicationTable that
// accepts a number and console.logs the multiplication
// table for that number (just multiply by the numbers
// 1 through 10)

function showMultiplicationTable(number) {
    for(var i = 1; i < 11; i++) {
        console.log(i + ' * ' + number + " = " + (i*number));
    }
}

console.log(showMultiplicationTable(10));

// use a for loop and this snippet of code:
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// to generate ten random numbers between 20 and 200 and
// output to the console whether each number is odd or even.

for(var a = 1; a < 11; a++) {
    var randomInt = getRandomInt(20,200);
    if (randomInt % 2 === 0) {
        console.log('the number ' + randomInt + ' is even');
    } else {
        console.log('the number ' + randomInt + ' is odd');
    }
}
