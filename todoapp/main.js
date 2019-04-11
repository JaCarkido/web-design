//this was my first javascript program. A simple todo list desgined before I began Tech Elevator

var addInput = document.querySelector('.add-input');
var addItem = document.querySelector('.add-item');
var addItemForm = document.querySelector('.add-item-form');
var itemList = document.querySelector('.item-list');

addInput.onkeyup = function () {
    if (addInput.value) {
        addItem.disabled = false;  // if there is no value do not create the item
    }else {
        addItem.disabled = true;
        
    }
    
}

// when form submits, grab value of the input
addItemForm.onsubmit = function() {
    event.preventDefault();
    var newItem = document.createElement("li");
    var userInput = document.createTextNode(addInput.value);
    var checkBox = document.createElement("input");
    
    checkBox.setAttribute("type","checkbox");
    newItem.appendChild(checkBox);
    newItem.appendChild(userInput);
    itemList.appendChild(newItem);
    addInput.value = '';
}

// create a new li with the value


// append the li to the list