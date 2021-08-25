const express=require("express");
const cors=require("cors");
const taskrouter=require("./routes/taskRouter")
const app=express()
app.use(cors())
app.use(express.static("public"))


app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.use("/tasks",taskrouter)

module.exports=app
