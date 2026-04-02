
import { print } from "./DOM.js"
class Task{
    constructor(name,description,nTasks,due){
         this.name = name
         this.description = description
         this.tasks = nTasks
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

}


export {Task}