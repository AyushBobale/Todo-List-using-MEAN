import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
        task    : {type : String, required : true},
        date    : {type : String, required : true}
    }, 
    {timestamps : true})

const TaskModel = mongoose.model('Tasks', taskSchema);

export default TaskModel