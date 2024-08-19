// 2: Write a JavaScript function checkSign that takes a number as an argument 
// and prints "Positive" if the number is greater than zero,
//  "Negative" if the number is less than zero, and "Zero" if the number is equal to zero.

const checkSign = (num) =>{
    if( num > 0){
      console.log('Potive') 
    }
    else if(num < 0){
      console.log('Negative') 
    }
    else if(num === 0){
      console.log('Zero') 
    }
  }
  checkSign(0)