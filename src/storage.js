import { taskList } from "./tasks.js";

function storeTask() {
  localStorage.setItem("task List", JSON.stringify(taskList));
}

function returnTask() {
  return JSON.parse(localStorage.getItem("task List")) || [];
}

export { storeTask, returnTask };
