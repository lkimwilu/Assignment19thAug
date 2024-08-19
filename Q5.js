// 5 (For Each loop): Write a JavaScript function doubleArray that takes an 
// array of numbers as an argument and prints each number doubled using a forEach loop.

function doubleArray(arr) {
    arr.forEach(num => {
        console.log(num * 2);
    });
}

doubleArray([1, 2, 3, 4, 5]);