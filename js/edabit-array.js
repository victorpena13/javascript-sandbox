//create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0


var testArray = [true, false, false, true, false];

var count = 0;
function countTrue(array) {
    array.forEach(function(element){
    if (element == true) {
         return count++;
    }
    });
}
countTrue(testArray);
console.log(count);

countTrue(testArray);