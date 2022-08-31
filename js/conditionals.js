"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 *
 */

function analyzeColor(color) {
    if (color === "blue") {
        alert("That is my favorite!");
    } else if (color === "red") {
        alert("Red is ok...");
    } else if (color === "green") {
        alert("like the Earth!");
    } else if (color === "violet") {
        alert("just like Liz's eyes");
    } else if (color === "orange") {
        alert("like the fruit!");
    } else if (color === "yellow") {
        alert("like the sun!");
    } else if (color === "indigo") {
        alert("I like indigo");
    } else if (isNaN(color) === false) {
        alert(color + " hey that's not a color");
    } else {
        alert(color + ", that is not my favorite, but I like it for you!");
    }
}
analyzeColor('cyan');
analyzeColor(3);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColorSwitch(color) {
    switch(color) {
        case "blue":
            alert("what a coincidence, that's my fav color");
            break;
        case "red":
            alert("lipstick " + color);
            break;
        case "yellow":
            alert("sunshine " + color);
            break;
        case "green":
            alert(color + "bean");
            break;
        case "violet":
            alert(color + " bent backwards");
            break;
        case "orange":
            alert("agent " + orange);
            break;
        case "indigo":
            alert(color + ". idk");
            break;
        case isNaN(color) === false:
            alert(color + " is not a number");
            break;
        default :
            alert(color + " that's not my fav color. but i like it for you.");
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userInput = prompt('enter your favorite color: ');

analyzeColorSwitch(userInput);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    switch(luckyNumber) {
        case 1 :
            alert("your lucky number is: " + luckyNumber + ".\nyour price before the discount: " + total +
                "\nyour amount with discount applied is: "+ (total - (total * .10)));
            break;
        case 2 :
            alert(total - (total * .25));
            break;
        case 3:
            alert(total - (total * .35));
            break;
        case 4:
            alert(total - (total * .50));
            break;
        case 5:
            alert("free!");
            break;
        default:
            alert(luckyNumber + " better luck next time");
            break;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userPrompt = parseInt(prompt("please enter total: "));

console.log(typeof userPrompt);


calculateTotal(1, 100);
calculateTotal(2, 200);
calculateTotal(luckyNumber, 100);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var yesNO = confirm("would you like to enter a number?");
console.log(yesNO);

if (yesNO === true) {
    var userNumber = prompt("your number please: ");
    if(isNaN(userNumber) === false) {
        if(userNumber % 2 === 0 ) {
            if(userNumber > 0) {
                alert("your number " + userNumber + " is even\nyour number + 100 is: " + (parseInt(userNumber)+100) + "\nyour number " + userNumber + " is positive");
            } else if (userNumber < 0) {
                alert("your number " + userNumber + " is even\nyour number + 100 is: " + (parseInt(userNumber)+100) + "\nyour number " + userNumber + " is negative");
            }
        } else {
            if(userNumber > 0) {
                alert("your number " + userNumber + " is odd\nyour number + 100 is: " + (parseInt(userNumber)+100) + "\nyour number " + userNumber + " is positive");
            } else if (userNumber < 0 ) {
                alert("your number " + userNumber + " is odd\nyour number + 100 is: " + (parseInt(userNumber)+100) + "\nyour number " + userNumber + " is negative");
            }
        }
    } else {
        alert(userNumber + " is not a number");
    }
} else {
    alert("signing off");
}



