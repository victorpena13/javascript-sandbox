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

// Create a function that takes a number as an argument.
//    Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//I will make a function that accepts a number
//and I will count and store each number in an array/variable from 1 till i reach the number passed into the function
// and then I will take that new array variable and pass it through a for loop to get the sum of all the numbers in the array
