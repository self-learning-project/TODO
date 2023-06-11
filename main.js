const todoInput = document.getElementById("todo-input");
const ulElement = document.getElementById("list-todo-container");
// console.log(localStorage);

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
  saveData();
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
    saveData();
  } else if (e.target.nodeName === "SPAN") {
    e.target.parentNode.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ulElement.innerHTML);
}

function showToDo() {
  ulElement.innerHTML = localStorage.getItem("data");
}
showToDo();

const clearData = () => {
  let confirmText =
    "Are you sure you want to delete all to To-Do's? This will be deleted forever.";
  let confirmFlag = confirm(confirmText);
  if (confirmFlag == true) {
    localStorage.clear();
    showToDo();
  }
};
