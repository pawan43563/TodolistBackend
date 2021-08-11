

const express=require("express")
const {getAllTasks,getTaskById,addTask,deleteTaskById,updateTaskById,requestValidation}=require("../controllers/taskController")

const router=express.Router();

router.route("/").get(getAllTasks).post([requestValidation,addTask])

router.route("/:id").get(getTaskById).delete(deleteTaskById).patch([requestValidation,updateTaskById])



module.exports=router




