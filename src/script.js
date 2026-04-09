import "./style.css";

import { Task } from "./tasks.js";
import { storeTask, returnTask } from "./storage.js";

const returned = returnTask();
console.log("retreived data: ", returned);
returned.forEach((task) => {
  const restoredTask = new Task(task.name, task.description, task.dueDate);
  restoredTask.id = task.id;
  restoredTask.add();
  restoredTask.displayTask();
});
