// Prompt the user for an odd number between 1 and 50. Use a loop and a
// break statement to continue prompting the user if they enter invalid input
(function() {
    function oddNumber() {
        for (var i = 1; i <= 50; i = i + 2) {
            if (userInput == i) {
                console.log("Yikes!, lets skip " + userInput);
                continue;
            }
            console.log(i);

        }
    }
    do {
        var userInput = prompt('enter a number between 1 & 50');
        if(userInput < 50 && userInput > 1) {
            console.log(oddNumber(userInput));
        }


    } while (userInput > 50 || userInput < 1 || isNaN(parseInt(userInput)));
})()




