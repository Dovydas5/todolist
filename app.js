const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const x = document.querySelector(".filter-todo");


todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener('click', fillterTodo);

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  if (todoInput.value === ""){
    alert("YOU MUST ENTER A NEW TASK")
    return false
  }
  if (x.selectedIndex === 2){
    alert("You cant enter new task here")
    return false
  }
  if (x.selectedIndex === 1){
    alert("You cant enter new task here")
    return false
  }
  todoList.appendChild(todoDiv);


}
function  check(e){
  const x = document.querySelector(".filter-todo").options.length;
  document.querySelector("demo").innerHTML = "Found " + x + " options in the list.";
  x.addEventListener('click', check);

}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }

  if(item.classList[0] === "complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
  }
}

function fillterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch(e.target.value){
      case "all":
        todo.style.display = 'none';
        break;
        case "completed":
        if(todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        }else{
          todo.style.display = 'none';
        }
        break;
        case "incompleted":
          if(!todo.classList.contains('completed')){
            todo.style.display = 'flex';
          }else {
            todo.style.display = 'none';
          }
          break;
    }
  });

}