// 3:Write a JavaScript function compareNumbers that takes two numbers as arguments. 
// If the first number is greater than the second, it should print "First is greater". If the second number is greater, 
// it should print "Second is greater". If both are equal, it should print "Both are equal".

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log("First is greater");
  } else if (num2 > num1) {
    console.log("Second is greater");
  } else {
    console.log("Both are equal");
  }
}