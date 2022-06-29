const myArray = [];
let i = 5;

while(i > 0) {
    myArray.push(i);
    i--;
}
console.log(myArray);

const arrayTwo = [];

for(let i = 0; i <=9; i++) {
    if(i%2!==0){
        arrayTwo.push(i);
    }
}
console.log(arrayTwo);

const arrayThree = [];

// [10, 8, 6, 4, 2]
for(let i = 9; i >0; i--) {
    if(i%2!==0) {
        arrayThree.push(i);
    }
}
console.log(arrayThree);

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(i = 0; i <= myArr.length; i++) {
    console.log(total);
    total = total + myArr[i];
    if(total === 20) {
        myArr.push(total);
        break;
    }
}
total = myArr[myArr.length-1];
console.log('testing');
console.log(total);
console.log('test');


//nesting for loops:

const arr = [[1, 2], [3, 4], [5, 6]];

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
