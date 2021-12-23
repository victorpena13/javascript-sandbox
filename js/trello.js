// const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube vidoes'];

// console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record youtube videos',
    isDone: false,
}]

// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo + " " + index);
//     return todo.title === 'Go to Gym'; todo.title === 'Go to Gym';
// });

const findTodo = function(myTodos, title) {
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase();
    });
    return myTodos[index]
}

let printMe = findTodo(newTodos, 'Go To Gym');
console.log(printMe);