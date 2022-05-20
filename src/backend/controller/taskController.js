import asyncHandler from "express-async-handler"

const getTask = asyncHandler( async (req, res) => {
    res.status(200).json({msg:'Get task new'})
})

const postTask = asyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text message')
    }
    res.status(200).json({msg:`Post task ${req.body.text}`})
})

const updateTask = asyncHandler( async (req, res) => {
    res.status(200).json({msg:`Update task ${req.params.id}`})
})

const deleteTask = asyncHandler( async (req, res) => {
    res.status(200).json({msg:`Delete task ${req.params.id}`})
})


export {getTask, 
        postTask, 
        updateTask, 
        deleteTask }