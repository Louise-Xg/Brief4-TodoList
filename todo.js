const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

//Create a function to create the li element corresponding to the task
function createTask(taskText) {
  const newLi = document.createElement("li");
  newLi.innerText = taskText;

  //add a remove button to each li element
  const buttonRemove = document.createElement("button");
  buttonRemove.innerText = "Supprimer";
  newLi.appendChild(buttonRemove);

  //remove the task from the list when the "supprimer" button is clicked
  buttonRemove.addEventListener("click", (event) => {
    newLi.remove();
  });

  //cross out the task when the li element is clicked
  newLi.addEventListener("click", function () {
    newLi.classList.toggle("completed"); // toggle the "completed" class on the li element when it is clicked
  });

  return newLi;
}

//Create a function to add a new task to the list
function addTask() {
  const taskText = input.value.trim(); //remove whitespace from the beginning and end of the input value

  //not allowing empty tasks to be added
  if (taskText === "") {
    alert("Veuillez entrer une tâche avant de l'ajouter à la liste.");
    return;
  }

  const newLi = createTask(taskText);
  ul.appendChild(newLi);

  input.value = ""; //clear input after adding a task
  input.focus(); //bonus: focus on input after adding a task
}

//add a task when the button is clicked
button.addEventListener("click", addTask);

//add a task when the Enter key is pressed
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});