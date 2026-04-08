import { Task,deleteTaskData} from "./tasks.js";

const taskMaker = document.createElement("button")
taskMaker.textContent = "+"
taskMaker.classList.add("createBtn")
taskMaker.addEventListener("click",()=>{
   newTask.classList.remove("hidden")
})

const newTask = document.createElement("div")
newTask.classList.add("hidden", "containers")

const newTaskContent = document.createElement("div")
newTaskContent.classList.add("contents")

const newTitle = document.createElement("h3")
newTitle.textContent = "New Element"

const newInput = document.createElement("input")
newInput.type = "text"
newInput.placeholder = "title"
newInput.classList.add("taskTitle")

const newDescription = document.createElement("div")
newDescription.placeholder = "tasks"

const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "+ new task";
addTaskBtn.classList.add("styleBtn")
addTaskBtn.type = "button";
addTaskBtn.addEventListener("click",()=>{
  const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "cook dinner...";
    taskInput.classList.add("desc-task-input");
    newDescription.append(taskInput);

})






const newDate = document.createElement("input")
newDate.type = "datetime-local"

const closeBtn = document.createElement("button")
closeBtn.textContent = "close"
closeBtn.classList.add("styleBtn")
const saveBtn = document.createElement("button")
saveBtn.textContent = 'save'
saveBtn.classList.add("styleBtn")


closeBtn.addEventListener("click",()=>{
  newTask.classList.add("hidden")

})

saveBtn.addEventListener("click",()=>{
  if (!newTask.classList.contains("hidden")){
    newTask.classList.add("hidden")}

    const descriptionTasks = Array.from(document.querySelectorAll(".desc-task-input"))
                                  .map(input => input.value)
                                  .filter(val => val.trim() !== ""); 
  const registerTask = new Task(newInput.value,descriptionTasks,"2026-09-09")
  registerTask.displayTask()

  newDescription.innerHTML = ""; 
  newInput.value = "";

})



newTaskContent.append(newTitle,newInput,newDescription,addTaskBtn,newDate,saveBtn,closeBtn)
newTask.append(newTaskContent)

document.querySelector("#mainContainer").append(taskMaker,newTask)




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

  task.description.forEach(task => {
      const taskWrapper = document.createElement("div");
      taskWrapper.style.display = "flex";
      taskWrapper.style.gap = "10px";

      const check = document.createElement("input");
      check.type = "checkbox";

      const line = document.createElement("p");
      // line.contentEditable=false
      line.textContent = task;
      line.style.margin = "0";

      taskWrapper.append(check, line);
      details.append(taskWrapper);
  });

  // let desc = document.createElement("p");
  // desc.textContent = task.description;

  let calendar = document.createElement("p");
  calendar.textContent = `created: ${task.date.toLocaleDateString("es-AR")} `;

  const editIcon = document.createElement("i")
  editIcon.classList.add("fa-solid", "fa-pen-to-square")

  const crossIcon = document.createElement("i")
  crossIcon.classList.add("fa-solid", "fa-xmark")

  const editBtn = document.createElement("button");
  editBtn.classList.add("editsButtons")
  editBtn.append(editIcon)
  

  editBtn.addEventListener("click", () => {
    const editing = title.isContentEditable;
    if (editing) {
      task.name = title.textContent;
      
      task.dueDate = due.textContent;

      
        if (editBtn.contains(crossIcon)) {
            crossIcon.remove();
            
        }
        editBtn.textContent = " "
        editBtn.append(editIcon);

    } else {
        if (editBtn.contains(editIcon)) {
            editIcon.remove();
        }

        
        editBtn.textContent = "Cancel"
        editBtn.append(crossIcon);
      }

    title.contentEditable = !editing;
    
    due.contentEditable = !editing;
  });

  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteBtn.append(deleteIcon);
  deleteBtn.classList.add("editsButtons");

  deleteBtn.addEventListener("click", (e) => {
 
    
    taskCard.remove();
    deleteTaskData(task.id);
  });

  details.append( calendar, editBtn,deleteBtn);

  header.addEventListener("click", () => {
    details.classList.toggle("show");
    arrow.classList.toggle("open");
  });

  taskCard.append(header, details);

  const container = document.querySelector("#mainContainer");
  container.insertBefore(taskCard,taskMaker);
}




export { print };


