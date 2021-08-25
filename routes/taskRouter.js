const express=require("express")
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});
const router=express.Router();
const requestValidation=require("../middlewares/requestvalidation");
const database=require("../controllers/taskControllerdatabase")
const file=require("../controllers/taskControllerFile")


obj_post=[requestValidation];
let mode;
class Mode{
    constructor(Obj){
        this.getAllTasks = Obj.getAllTasks;
        this.getTaskById = Obj.getTaskById;
        this.deleteTaskById = Obj.deleteTaskById;
        this.addTask = Obj.addTask;
        this.updateTaskById = Obj.updateTaskById;
        this.deleteAll=Obj.deleteAll
    }
}
switch(process.env.STORAGE){
    case "Database":{
        mode=new Mode(database);
    }
    break;
    case "File":{
        mode=new Mode(file);    
    }
    break;
}



router.route("/").get([mode.getAllTasks]).post([...obj_post,mode.addTask]).delete([mode.deleteAll])
router.route("/:id").delete([mode.deleteTaskById]).patch([...obj_post,mode.updateTaskById]).get([mode.getTaskById])








module.exports=router




