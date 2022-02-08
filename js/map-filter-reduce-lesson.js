//functional idioms: map, filter, and reduce
//map and filter can be used to solve common array iteration problems in a manner which
//produce less side effects. old approach looks like this.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens = [];
for (var i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }
}
console.log(evens);

//for. filter if the callback returns true the element will be in the new collection,
// if it returns false, the element will not be part of the new collection.
var evenNumbers = numbers.filter(function (n){
   return n % 2 === 0;
});

console.log(evenNumbers);