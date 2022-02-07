//old way
Math.pow(2,8)

var mathPow = 2**8;
console.log(mathPow);

if (true) {
    var nameVar = 'victor';
}
console.log(nameVar); // 'victor'

if(true) {
    let nameLet = 'victor';
}
console.log(nameLet); // 'undefined'

//const keyword will also create a block scoped variable

//template strings

const name = 'victor javier';
console.log('hello, ' + name + '!');
//same as
console.log(`Hello, ${name}!`);
console.log(`Hello, ${name.toUpperCase()}`);
console.log(`Hello, ${name.toUpperCase()}!`); // Hello, CODEUP!

//arrow functions

const oldWay =  function (name) {
    return 'hello, ' + name + '!';
}

const newWay = (name) => `Hello, ${name}!`;
//parenthesis can be omitted if their is only one argument


//default function parameter values

//old way

function sayHello(name) {
    if (typeof name === 'undefined') {
        name = 'World';
    }
    return 'Hello, ' + name + '!';
}

sayHello(); // "Hello, World!"
sayHello('victor') // "Hello, victor!"

//es6 syntax

function sayHi(name = 'World') {
    return `Hello, ${name}!`;
}

sayHi(); // "Hello, World!"
sayHi('victor') // "Hello, victor!"

//arrow functions

const diHola = (nombre = 'World') => `hello, ${nombre}!`;

//object property variable assignment shorthand

//old way
const nombre = 'victor pena';
const person = {
    name: nombre,
    age: 30,
}

//new shorthand
const persona = {
    nombre,
    age: 30
}

//object destructing


//old way