const ar = [1,2,3,4,5];
function sum(arr, n) {
    // Only change code below this line
    if (n<=0) {
        return 0;
    } else {
        return sum(arr, n-1)+ arr[n-1];
    }
    // Only change code above this line
}


console.log('test')
console.log(sum(ar,5) + ar[5-1]);

console.log(ar, 5-1);
console.log('test')
console.log(ar[5-1]);
console.log(ar[4-1]);