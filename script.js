/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


function submitItem(){
  var submittedItem = document.getElementById('toBuy').value;
  const createElem = document.createElement("p");
  createElem.innerHTML = submittedItem;
  groceryList.appendChild(createElem);
}
      
const groceryList = document.getElementById("grocery-list");

