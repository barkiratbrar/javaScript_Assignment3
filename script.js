//Get references to the DOM elements we'll need to manipulate
const addItemButton = document.getElementById('add-item');
const newItemInput = document.getElementById('new-item');
const todoList = document.getElementById('todo-list');

//Function to add a new to-do item
function addTodoItem() {
    // Get the value entered in the input field
    const newItemText = newItemInput.value.trim();

    //Check if the input is not empty
    if (newItemText !== '') {
        //Create a new list item for the to-do
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        //Create a checkbox for marking the item as done
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            //Toggle the 'done' class based on checkbox state
            if (checkbox.checked) {
                listItem.classList.add('done');
            } else {
                listItem.classList.remove('done');
            }
        });

        //Create a text node for the item text
        const textNode = document.createTextNode(newItemText);

        //Create a delete button for removing the item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            //Remove the list item when the button is clicked
            listItem.remove();
        });

        //Append the checkbox, text, and delete button to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(textNode);
        listItem.appendChild(deleteButton);

        //Add the list item to the to-do list
        todoList.appendChild(listItem);

        //Clear the input field for the next item
        newItemInput.value = '';
    }
}

//Add an event listener to the Add Item button for creating new to-dos
addItemButton.addEventListener('click', addTodoItem);
