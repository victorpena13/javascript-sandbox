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
