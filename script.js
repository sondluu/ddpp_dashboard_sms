      //function to add sent messages to history once Send button is clicked
      function submitItem(){
      var submittedItem = document.getElementById('toSend').value; //grab text in textbox
      const createElem = document.createElement("p"); //variable to contain text
      createElem.innerHTML = submittedItem; //add the typed text into text container 
      smsList.appendChild(createElem); //add the text "createElem" to the history box "smsList"
      }
      
      const smsList = document.getElementById("sms-list");
