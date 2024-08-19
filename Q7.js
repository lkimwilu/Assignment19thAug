// 7 (Do while loop): Write a JavaScript function printNumbersDoWhile that takes 
// a number n as an argument and prints all numbers from 0 to n using a do...while loop.

function printNumbersDoWhile(n) {
    let i = 0;
    do {
        console.log(i);
        i++;
    }
     while (i<= n);
}

printNumbersDoWhile(5);