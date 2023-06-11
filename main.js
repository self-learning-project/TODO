const todoInput = document.getElementById("todo-input");
const ulElement = document.getElementById("list-todo-container");

function handleClick() {
  let todoValue = todoInput.value;
  if (todoValue === "") {
    alert("Please Enter the To-Do List");
  } else {
    let liElement = document.createElement("li");
    console.log(liElement);
    liElement.innerHTML = todoValue;
    ulElement.appendChild(liElement);
  }
  todoInput.value = "";
}
