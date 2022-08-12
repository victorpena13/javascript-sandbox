x = 1;
x = x + 2; // 3
console.log(x);

// short-hand operations:
y = 1;
y += 2; // 3
console.log(y);

a = 2;
a = a * 5; // 10;

// short hand:
b = 2;
b *= 5; // 10

b++;
console.log(b++); // 11
d = 2;
console.log(d--); // 2
console.log(d); // 1


var pi = 3.14;
console.log(typeof pi.toString()); // string
console.log(typeof pi); // number

console.log("test for one")
var one = 1;
console.log(typeof one.toFixed());

var stringOfNumbers = '123';


var numberOfNumbers = Number(stringOfNumbers);
console.log(numberOfNumbers);
console.log(typeof numberOfNumbers);
console.log(typeof stringOfNumbers);
console.log(Number('letters')); // NaN - not a number;

isNaN(2); // false
isNaN("a"); // true

var lettersAndNumbers = '123abc';
console.log(parseInt(lettersAndNumbers)); // 123;
console.log(lettersAndNumbers.length);
console.log(lettersAndNumbers.indexOf(1));
lettersAndNumbers = lettersAndNumbers.replace(2, "two");
console.log(lettersAndNumbers); //1two3abc

var stringTwo = lettersAndNumbers.substring(1,4);
console.log(stringTwo); // two
console.log(stringTwo.toUpperCase()); //TWO

var stringWithWhiteSpace = "    space    ";
console.log(stringWithWhiteSpace);
console.log(stringWithWhiteSpace.trim()); // "space";


console.log("example starts here: ")
var saveforlater = Number('123');
console.log(saveforlater); // 123

console.log(parseFloat('100.02'));

var myName = 'victor pena';
console.log(myName.length);
console.log(myName.indexOf('c'));

console.log(Number.MAX_VALUE);

