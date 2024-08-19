// DOM Manipulation
// 8: Write a JavaScript function changeText that changes the text 
// of an HTML element with the id myText to "Hello, World!" when the function is called.

 function changeText(){
    let element = document.getElementById('myText');
    element.innerText = 'Hello, World!';
}

 changeText();
 