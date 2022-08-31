var i = 0;
while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

var a = 10;
while (a < 10) {
    console.log(a);
    a++;
}

do {
    console.log(a);
    a++;
} while( a < 10);


for(var c = 0; c <= 10; c++) {
    console.log("c: " +  c);
}

for(var d =0, e = 9; d < 10; d++, e--) {
    console.log(d + " " + e);
}


var numberToStopAt = 5;

for (var j = 1; j < 100; j++) {
    console.log(j);
    if(j === numberToStopAt) {
        console.log("breaking point. stop");
        break;
        console.log('you will not see this');
    }
}

for(var k = 1; k < 100; k++) {
    if(k%2!==0) {
        console.log("smelly odd number");
        continue;
    }
    console.log('here is an even number: ' + k);
}




