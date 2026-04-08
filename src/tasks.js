
import { print } from "./DOM.js"



class Task{
    constructor(name,nTasks,due){
         this.id = Date.now() + Math.random();
         this.name = name
         this.description = nTasks
         this.date = new Date()
         this.dueDate =new Date(due)
         this.unfinished = true
    }
    
   changeState(){
     this.unfinished = !this.unfinished
   }

   displayTask(){
    console.log("Printing task...")
    print(this)
    
   }
   add(){
    taskList.push(this)
   }
   remove(){
    taskList.splice(this[i],1)
   }
   

}
function deleteTaskData(id) {
    taskList = taskList.filter(task => task.id !== id);
}



export {Task,deleteTaskData}