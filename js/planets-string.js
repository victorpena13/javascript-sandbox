(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var stringsWithBr = planetsArray.join('<br>');
    console.log(stringsWithBr);
    //this does not add a linebreak in the string textbox.  You must use \n to do a
    //line break in a textarea.

    var stringsWithLineBreak = planetsArray.join('\n');
    console.log('variable stringsWithBr: ' + stringsWithLineBreak);

    //bonus:
    // to add a <ul> at the beggining of the array i will use unshift.
    var unorderedList = planetsArray.unshift('<ul>');
    // to add <ul> at the end of the array i will use push.
    unorderedList = planetsArray.push('<ul>');

    unorderedList = planetsArray.join('<li>');
    console.log(unorderedList)
})();