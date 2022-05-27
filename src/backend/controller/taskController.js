import asyncHandler from "express-async-handler"
import TaskModel from "../models/taskModel.js"

const getTask = asyncHandler( async (req, res) => {
    const tasks = await TaskModel.find({})
    res.status(200).json(tasks)
})

const postTask = asyncHandler( async (req, res) => {
    if(!req.body.task){
        res.status(400)
        throw new Error('Please add text message')
    }
    const tasks = await TaskModel.create({task : req.body.task, date : req.body.date})
    res.status(200).json(tasks);
})

const updateTask = asyncHandler( async (req, res) => {
    const task = await TaskModel.findById(req.params.id)
    if(!task){
        res.status(400)
        throw new Error('Task Not found')
    }
    console.log(req.body.task)
    const taskUpdate = await TaskModel.findByIdAndUpdate(req.params.id, 
        {   task : req.body.task, 
            date : req.body.date}, 
        {new : true})
    res.status(200).json({msg: taskUpdate})
})

const deleteTask = asyncHandler( async (req, res) => {
    const task = await TaskModel.findById(req.params.id)
    if(!task){
        res.status(400)
        throw new Error('Task Not found')
    }
    const taskDelete = await TaskModel.findByIdAndDelete(req.params.id)
    res.status(200).json(taskDelete)
})


export {getTask, 
        postTask, 
        updateTask, 
        deleteTask }