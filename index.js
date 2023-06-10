let inputField = document.getElementById('inputfield');
let addToDoButton = document.getElementById('addtodo');
let toDoContainer = document.getElementById('todoContainer');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})