// 9. Write a JavaScript function toggleVisibility that toggles the 
// visibility of an HTML element with the id myDiv. When the function is called,
//  it should hide the element if it's visible, and show it if it's hidden

function toggleVisibility() {

    let element = document.getElementById('myDiv');

      if (element.style.display === 'none'){
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

toggleVisibility();