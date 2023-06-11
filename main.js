const todoInput = document.getElementById("todo-input");
const ulElement = document.getElementById("list-todo-container");

function handleClick() {
  let todoValue = todoInput.value;
  if (todoValue === "") {
    alert("Please Enter the To-Do List");
  } else {
    let liElement = document.createElement("li");
    liElement.innerHTML = todoValue;
    ulElement.appendChild(liElement);

    let spanElement = document.createElement("span");
    spanElement.innerHTML = "\u00d7";
    liElement.appendChild(spanElement);
  }
  todoInput.value = "";
}

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleClick();
  }
});

ulElement.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.nodeName === "SPAN") {
    e.target.parentNode.remove();
  }
});
