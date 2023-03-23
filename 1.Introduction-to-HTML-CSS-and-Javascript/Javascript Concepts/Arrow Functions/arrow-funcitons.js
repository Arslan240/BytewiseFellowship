// we define it with syntax like this () => {} 
const multiply = (a,b) => { 
    return a * b;
 }

// it also have implicit return. We don't need to write return if function only contains 1 line of code.
const add = () => a + b;

// they are easier to define inline as eventHandlers
const button = document.getElementById("btn-submit");
button.addEventListener('click', (event) => { console.log(event.target) })