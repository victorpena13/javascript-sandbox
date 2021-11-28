"use strict";

var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

//results in the following output:
//while loop iteration #1
//while loop iteration #2
//while loop iteration #3
//while loop iteration #4
//while loop iteration #5
//while loop iteration #6
//while loop iteration #7
//while loop iteration #8
//while loop iteration #9
//while loop iteration #10
//if variable i is changed to a number
//that is equal or greater then 10. the loop will not run

var a = 10;
while (a<10) {
    console.log('while loop iteration' + a);
    a++;
}

//for loops:

for (var b = 0; b < 10; b++) {
    console.log('for loop iteration # ' + b);
}

for(var c = 0, d = 9; c < 10; c++, d--) {
    console.log('for loop iteration #' + c + ', d = ' + d);
}

//break and continue:
//sometimes a condition independent of the loop condition will occur
//that gives reason to exit the loop.  the 'break' keyword allows you to exit the loop at any time.

var numberToStopAt = 5;

for (var e = 1; e < 100; e++) {
    console.log('loop counter is: ' + e);

    if (e === numberToStopAt) {
        console.log('we have reached the stopping point: break!');
        break;
        // console.log('anything after the break will never be seen');
    }
}

// the above example will output the following:
// loop counter is: 1
// loop counter is: 2
// loop counter is: 3
// loop counter is: 4
// loop counter is: 5
// we have reached the stopping point: break!

//continuing the next iteration of a loop:

for (var g = 1; g < 100; g++) {
    if (g % 2 !== 0) {
        continue;
    }
    console.log('Here is an even number: ' + g);
}

//the out would display even numbers between 1 and 100.
