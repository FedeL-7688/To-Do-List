import "./style.css"

import {Task} from "./tasks.js"



const toby = new Task("wash Toby",["take Toby to the petShop to take a bath"],"2026-06-25")
toby.displayTask()

const park = new Task("testing", ["further testing"],"35-05-25")
park.displayTask()