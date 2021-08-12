const express=require("express");
const cors=require("cors")
const taskrouter=require("./routes/taskRouter")
const api=require("./controllers/taskController")
const app=express()
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/tasks",taskrouter)


app.listen(3000,()=>{
    console.log("Server Started on port 3000");
})