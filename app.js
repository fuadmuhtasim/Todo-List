//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

//Functions
function addTodo(event){
  //prevent form from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //TRASH BUTTON
  const trashbutton = document.createElement('button');
  trashbutton.innerHTML = '<i class = "fas fa-trash"> </i>';
  trashbutton.classList.add("trash-btn");
  todoDiv.appendChild(trashbutton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
  //CLEAR INPUT VALUE
  todoInput.value = "";
}

function deleteCheck(e){
  const item = e.target;
  //DELETE
  if(item.classList[0]=== 'trash-btn'){
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }

  if(item.classList[0]=== 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterToDo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display ="flex";
        break;
      case "completed":
        if (todo.classList.contains('completed')){
          todo.style.display = "flex";
        }
        else {
          todo.style.display ="none";
        }
        break;
      case "incomplete":
        if(!todo.classList.contains('completed')){
          todo.style.display = "flex";
        }
        else {
          todo.style.display ="none";
        }
        break;
    }
  });
}
