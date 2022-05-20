import express, { application } from "express";
const router = express.Router();
import { getTask, postTask, updateTask, deleteTask }  from '../controller/taskController.js';

router.get('/', getTask)
router.post('/', postTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router