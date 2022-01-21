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

console.log(countTrue(testArray));;
console.log(countTrue(testArrayTwo));;
console.log(countTrue(testArrayThree));;


