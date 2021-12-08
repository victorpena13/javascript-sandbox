// Prompt the user for an odd number between 1 and 50. Use a loop and a
// break statement to continue prompting the user if they enter invalid input
(function() {
    do {
        var userInput = prompt('enter a number between 1 & 50');

    } while (userInput > 50 || userInput < 1 || isNaN(userInput));


})()




