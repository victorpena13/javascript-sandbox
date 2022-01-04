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

//findIndex will iterate through the newTodos array of objects and return the indice of 'Go to Gym';
const index = newTodos.findIndex(function(todo,index) {
    console.log(todo + " " + index)
    return todo.title === 'Go to Gym';
})

console.log(index);
//will result in the details of the object index;
console.log(newTodos[index]);