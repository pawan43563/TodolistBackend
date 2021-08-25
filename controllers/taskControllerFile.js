// contains all the request handlers for /tasks route
const fs=require("fs");
const path=require('path')
const sendResponse=require("../utils/sendResponse")

const dataSource=path.join(__dirname,"..","data","tasks.json");
const Tasks=JSON.parse(fs.readFileSync(dataSource,"utf-8"));
const Task=require("../models/taskContructor");





// Create Task and add it to file if valid
const addTask=(req,res)=>{
    let newTask=new Task(req.body);
    Tasks.push(newTask)


    fs.writeFile(dataSource,JSON.stringify(Tasks),(err)=>{
        if(err){
            Tasks.pop();
            return sendResponse({res,statusCode:404,message:"Error in adding task",error:err})  
        }
        sendResponse({res,statusCode:200,message:"Task Succesfully added ",data:newTask})   
    })
}

// Get all tasks
const getAllTasks=(req,res)=>{
    sendResponse({res,statusCode:200,message:"Successfully fetched",data:Tasks})
}

// Get Task by Id 
const getTaskById=(req,res)=>{
    let foundmatch;
    foundmatch=Tasks.find((element)=>element.taskId===req.params.id)
    if(!foundmatch){
        return sendResponse({res,statusCode:200,message:"Error While fetching",error:"Invalid Id"})
    }
    sendResponse({res,statusCode:200,message:"Successfully fetched",data:foundmatch})
    
}

// Delete Task By Id
const deleteTaskById=(req,res)=>{
    const index = Tasks.findIndex(e => e.taskId === req.params.id);
    if(index===-1){
        return sendResponse({res,statusCode:404,message:"Taskid Not found",error:"Invalid Id"})    
    }
                
    fs.writeFile(dataSource,JSON.stringify(Tasks),(err)=>{
        if(err){
            return sendResponse({
                res,
                statusCode:404,
                message:"Error while writing data",
                error:err})
        }
        deletedobj=Tasks[index]
        Tasks.splice(index,1);
        sendResponse({
            res,
            statusCode:200,
            message:"Task Successfully Deleted",
            data:deletedobj})
                        
    })
              
        
}


const updateTaskById=(req,res)=>{

    const index = Tasks.findIndex(e => e.taskId === req.params.id);
    if(index===-1){
        return sendResponse({
            res,
            statusCode:404,
            message:"Index not found",
            error:"Error"
        })
    }

    Object.keys(req.body).forEach((key)=>{
        Tasks[index][key]=req.body[key];
    })

    fs.writeFile(dataSource,JSON.stringify(Tasks),(err)=>{
        if(err){
            return sendResponse({
                res,
                statusCode:404,
                message:"Error While Writing",
                error:"Error"})
        }
        sendResponse({
            res,
            statusCode:200,
            message:"Updated Successfully",
            data:Tasks[index]})
    })
}

const deleteAll=(req,res)=>{
    Tasks.splice(0,Tasks.length)
    fs.writeFile(dataSource,JSON.stringify(Tasks),(err)=>{
        if(err){
            return sendResponse({
                res,
                statusCode:404,
                message:"Error While Deleting",
                error:"Error"})
        }
        sendResponse({
            res,
            statusCode:200,
            message:"Tasks Deleted Successfully",
            data:"Deleted"})
    })
}


module.exports={
    getAllTasks,
    getTaskById,
    addTask,
    deleteTaskById,
    updateTaskById,
    deleteAll

}

