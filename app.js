const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv")
const taskrouter=require("./routes/taskRouter")
const api=require("./controllers/taskController")
const app=express()
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}));


let text=`<embed type="type/markdown" src="https://pawan43563.github.io/TodolistBackend/" height="100%" width="100%" />`;

fs.writeFileSync("./public/index.html", text);

app.use("/tasks",taskrouter)
app.use(express.static("public"))


app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started on port 3000");
})