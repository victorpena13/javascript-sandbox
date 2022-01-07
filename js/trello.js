// simplified version of searching through an array:
const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube videos'];
console.log(myTodos.indexOf('Buy Bread'));


const newTodos = [{
    title: 'Buy Bread',
    isDone: false
}, {
    title: 'Go to Gym',
    isDone: false
}, {
    title: 'Record youtube videos',
    isDone: false
}]

//findIndex will iterate through the newTodos array of objects and return the indice of 'Go to Gym'
//the findIndex function works for searching through an array holding multiple objects.

const index = newTodos.findIndex(function(todo,index) {
    console.log(todo + " " + index)
    return todo.title === 'Go to Gym';
});

console.log(index);
//will result in the details of the object index;
console.log(newTodos[index]);

// refactored code from lines 20-23 into a function to accept a title object array list to return the index:



let printMe = findTodoMethodOne(newTodos, 'Record youtube videos');
console.log(printMe);


let searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', function (e) {
    var value = e.target.value;

    var data = searchTable(value, newTodos)

});

function searchTable(val, data) {
    var filteredData = [];

    for(var i = 0; i < data.length; i++) {
        value = val.toLowerCase();
        var name = data[i].title.toLowerCase();

        if(name.includes(value)){
            filteredData.push(data[i]);
        }
    }
    return filteredData;
}

const findTodoMethodOne = function(myTodos, title) {
    const index = myTodos.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === title;
    });
    return myTodos[index];
}
findTodoMethodOne(myTodos)







