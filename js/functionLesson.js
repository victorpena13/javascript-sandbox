(function () {
    var myString = "42";

    var result = parseInt(myString);
    console.log(result);

    function sumOfTwo(x,y) {
        var output = x + y;
        return output;
    }

    var two = sumOfTwo(1,1);
    var three = sumOfTwo(1,2);
    var four = sumOfTwo(2,2);
    console.log(two);
    console.log(three);
    console.log(four);

    function increment(x) {
        return x + 1;
    }

    console.log("increment function:");
    var five = increment(increment(increment(two)));
    console.log(five);
    var addTwoVars = sumOfTwo(increment(two),five);
    console.log(addTwoVars);

    function shout(message) {
        alert(message.toUpperCase() + "!!!");
    }
    shout("scream & shout");

    function sayHello(name) {
        var two = 3;
        console.log(sumOfTwo(two, five));
        var result = name;
        return "Hello, " + result;
    }
    shout(sayHello('victor'));
})();

