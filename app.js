const express=require("express");
const cors=require("cors");
const fs=require("fs")
const dotenv=require("dotenv")
const taskrouter=require("./routes/taskRouter")
const api=require("./controllers/taskController")
const app=express()
app.use(express.static("public"))
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.use("/tasks",taskrouter)



app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started on port 3000");
})