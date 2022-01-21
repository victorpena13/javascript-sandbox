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

// console.log(countTrue(testArray));
// console.log(countTrue(testArrayTwo));
// console.log(countTrue(testArrayThree));

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