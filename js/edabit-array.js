//problem:
//create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

var testArray = [true, false, false, true, false];
var testArrayTwo = [false, false, false, false];
var testArrayThree = [];

function countTrue(array) {
    var count = 0;
    array.forEach(function(element){
        if (element == true) {
            count++;
        }
    });
    return count;
}

console.log(countTrue(testArray));
console.log(countTrue(testArrayTwo));
console.log(countTrue(testArrayThree));
//problem
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

var numbers = [1, 2, 3, 4, 5];
var numberList = [2334454, 5];
var num = [1];

function minMax(array) {
    var minMaxArr = [];
    var sortedArr = array.sort((a, b) => a-b);
    var secIndex = sortedArr.pop();
    var firstIndex = sortedArr.shift();
    minMaxArr.push(firstIndex, secIndex);
    return minMaxArr;
}

minMax(numbers);
minMax(numberList);
minMax(num);
// problem:
// Create a function that takes a number as an argument.
//    Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//mynotes:
//I will make a function that accepts a number
//and I will count and store each number in an array/variable from 1 till i reach the number passed into the function
// and then I will take that new array variable and pass it through a for loop to get the sum of all the numbers in the array

function addUp(number) {
    var count = []
    for(var i = 0; i <= number; i++) {
        count.push(i);
    }
    var sum = 0;
    for(var j = 1; j < count.length; j++) {
        sum += count[j];
    }
    return count + " = " + sum
}
console.log(addUp(4));
//my notes:
//to solve this problem i had to create a function that accepts a number and used a for loop to iterate and store
//each number in a variable array.
//then i created another for loop to iterate through the array I previously created and returned the sum of the array.

//problem:
// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Matchstick Houses, Steps 1, 2 and 3
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

//my notes:
// 1 houses = 6 matchsticks * 1 houses - 0 houses = 6
// 2 houses = 6 matchsticks * 2 houses - 1 houses = 11;
// 3 houses = 6 matchsticks * 3 houses - 2 houses = 16;
// 4 houses = 6 matchsticks * 4 houses - 3 houses = 21;
// 87 houses = 6 matchsticks * 87 houses - 86 houses = 436;

function matchHouses(step) {
    if (step == 0) {
        return 0;
    } else {
        return step * 6 - (step-1);
    }
}
matchHouses(87);

