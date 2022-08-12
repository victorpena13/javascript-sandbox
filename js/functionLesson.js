console.log(parseInt("42"));

var myString = "13";

var myNumber = parseInt(myString);
console.log(myNumber);

function plusFive(x) {
    return x + 5;
}

var result = plusFive(4);
console.log(result);
var resultThree = plusFive(3);
console.log(resultThree);

function cap(string) {
    var output = string.toUpperCase();
    return output;
}
var capString = cap("eat this");
console.log(capString);

console.log(cap("capital"));

function increment(x) {
    return x + 1;
}

var four = increment(3);
console.log(four);
var five = increment(4);
console.log(five);