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
