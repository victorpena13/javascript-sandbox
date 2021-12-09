(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["samantha", "charolotte", "miranda", "carrie"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("number of names: " + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++) {
        console.log('the name at index ' + i + " is: " + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log('here is a lovely name: ' + name + '.');
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5

     */

    function firstIteration(array) {
        console.log(array[0]);
    }

    function secondIteration(array) {
        console.log(array[1]);
    }

    function thirdIteration(array) {
        console.log(array[2]);
    }

    function fourthIteration(array) {
        console.log(array[3]);
    }

    console.log(firstIteration(names));
    console.log(secondIteration(names));
    console.log(thirdIteration(names));
    console.log(fourthIteration(names));
})();