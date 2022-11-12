
function sumOfTwo(x,y) {
    return x + y;
}

console.log(sumOfTwo(2, 4));
sumOfTwo(1,3); // will not display to console.
console.log(sumOfTwo(9, 9));

var stringFortyTwo = "42";
console.log(typeof stringFortyTwo);

var fortyTwo = parseInt(stringFortyTwo);
console.log(fortyTwo);


function increment(x) {
    return x+1;
    console.log("you will not see this line");

}

var four = increment(3);
console.log(four);
var five = increment(four);
console.log(five);

var six = increment(increment(increment(3)));
console.log(six);




