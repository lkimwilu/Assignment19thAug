// 2: Write a JavaScript function checkSign that takes a number as an argument 
// and prints "Positive" if the number is greater than zero,
//  "Negative" if the number is less than zero, and "Zero" if the number is equal to zero.

function checkSign(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}