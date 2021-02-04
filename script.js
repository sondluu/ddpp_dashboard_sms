/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");



      

const groceryList = document.getElementById("grocery-list");

const submitItem = document.getElementById('toBuy').value = '';

const createElem = document.createElement("p");


createElem.innerHTML = submitItem;

groceryList.appendChild(createElem);
