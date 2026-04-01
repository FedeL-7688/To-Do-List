import { Task } from "./tasks.js";

const taskMaker = document.createElement("button")
taskMaker.textContent = "+"
taskMaker.classList.add("createBtn")
taskMaker.addEventListener("click",()=>{
   
})

const newTask = document.createElement("div")
newTask.classList.add("hidden containers")
const newTaskContent = document.createElement("div")
newTaskContent.classList.add("contents")
const newTitle = document.createElement("h3")
newTitle.textContent = "New Element"

const newInput = document.createElement("input")
newInput.type = "text"
newInput.placeholder = "title"

const newDescription = document.createElement("textArea")
newDescription.placeholder = "description"

const closeBtn = document.createElement("button")
closeBtn.textContent = "close"
const saveBtn = document.createElement("button")
saveBtn.textContent = 'save'

newTaskContent.append(newTitle,newInput,newDescription,saveBtn,closeBtn)
newTask.append(newTaskContent)





function print(task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  const header = document.createElement("div");
  header.classList.add("task-header");

  const title = document.createElement("h1");
  title.textContent = task.name;

  const due = document.createElement("span");
  due.textContent = `due: ${task.dueDate.toLocaleDateString("es-AR")}`;

  const arrow = document.createElement("span");
  arrow.textContent = "▼";
  arrow.classList.add("arrow");

  header.append(title, due, arrow);

  const details = document.createElement("div");
  details.classList.add("task-details");

  let desc = document.createElement("p");
  desc.textContent = task.description;
  let calendar = document.createElement("p");
  calendar.textContent = `created: ${task.date.toLocaleDateString("es-AR")} `;

  let editBtn = document.createElement("button");
  editBtn.textContent = "editar";
  editBtn.addEventListener("click", () => {
    const editing = title.isContentEditable;
    if (editing) {
      task.name = title.textContent;
      task.description = desc.textContent;
      task.dueDate = due.textContent;

      editBtn.textContent = "editar";
    } else {
      editBtn.textContent = "guardar";
    }

    title.contentEditable = !editing;
    desc.contentEditable = !editing;
    due.contentEditable = !editing;
  });

  details.append(desc, calendar, editBtn);

  header.addEventListener("click", () => {
    details.classList.toggle("show");
    arrow.classList.toggle("open");
  });

  taskCard.append(header, details);

  const container = document.querySelector("#mainContainer");
  container.append(taskCard);
}




export { print };


