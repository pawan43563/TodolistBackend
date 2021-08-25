// contains all the request handlers for /tasks route

const mongoose = require('mongoose');
const uniqid=require("uniqid")
const sendResponse=require("../utils/sendResponse")
const {Todo}=require("../models/taskModel");





// Create Task and add it to file if valid
const addTask=async (req,res)=>{
    try{
        const todo = new Todo({
            taskId:uniqid(),
            content:req.body.content,
            createdAt:req.body.createdAt,
            updatedAt:req.body.updatedAt,
        });
        let result=await todo.save();
        return sendResponse({
            res,
            statusCode: 200,
            message: "Added Successfully",
            data: result
        });
    }catch(error){
        return sendResponse({
            res,
            statusCode: 200,
            message:"Cannot Create new Task",
            error:error
        });
    }
    
}

// Get all tasks
const getAllTasks=async (req,res)=>{
    try{
        const response=await Todo.find();
        if(response){
            return sendResponse({
                res,
                statusCode: 200,
                message: "No Task present",
                data: response
            });    
        }
        return sendResponse({
            res,
            statusCode: 200,
            message: "Successfully fetched all the tasks",
            data: response
        });
    }catch(error){
        return sendResponse({
            res,
            statusCode: 200,
            message:"Cannot Fetched all Task",
            error:error
        });
    }
}

// Get Task By Id
const getTaskById=async (req,res)=>{
    try{
        const response=await Todo.find({taskId:req.params.id});
        if(response.length<1){
            return sendResponse({
                res,
                statusCode: 200,
                message: "Task with the key provided is not present",
                error: "Invalid Key",
            });
        }
        return sendResponse({
            res,
            statusCode: 200,
            message: `Successfully fetched task with an id: ${req.params.id}`,
            data: response
        });
    }catch(error){
        return sendResponse({
            res,
            statusCode: 400,
            message:"Cannot get Task with a given id",
            error:error
        });
    }
}

// Delete Task By Id
const deleteTaskById=async (req,res)=>{
    const id = req.params.id;
    try{
        const result=await Todo.deleteOne({ taskId : id })
        if(result.deletedCount==0){
            return sendResponse({
                res,
                statusCode: 404,
                message: "Task with the key provided is not present",
                error: "Invalid Key",
            });
        }
        return sendResponse({
            res,
            statusCode: 200,
            message: "Task Deleted Successfully"
        });
    }catch(error){
        return sendResponse({
            res,
            statusCode: 400,
            message:"Cannot Delete Task",
            error:error
        });
    }
}


const updateTaskById=async (req,res)=>{
    try{
        const data=await Todo.findOneAndUpdate({taskId:req.params.id}, {
            $set: req.body
        }, { runValidators: true })
        if(!data){
            return sendResponse({
                res,
                statusCode: 404,
                message: "Task with the key provided is not present",
                error: "Invalid Key",
            });
        }
        return sendResponse({
            res,
            statusCode: 200,
            message: "Updated Successfully"
        });
    }catch(error){
        return sendResponse({
            res,
            statusCode: 400,
            message:"Cannot Update Task",
            error:error
        });
    }

}

const deleteAll=async (req,res)=>{
    try{
        await Todo.deleteMany();
        await Todo.collection.drop();
        return sendResponse({
            res,
            statusCode: 200,
            message: "Tasks Deleted Successfullt"
        });
    }catch(error){
        return sendResponse({
            res,
            statusCode: 400,
            message:"Cannot Delete all Task",
            error:error
        });
    }
}







module.exports={
    getAllTasks,
    addTask,
    deleteTaskById,
    updateTaskById,
    deleteAll,
    getTaskById

}

