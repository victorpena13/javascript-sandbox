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


