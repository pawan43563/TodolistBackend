// in this file make connection to db

const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});
const app=require("./app")
const {DB_LOCAL,STORAGE}=process.env
switch(STORAGE){
    case "Database":{
        mongoose.connect((DB_LOCAL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((connection)=>{
            console.log(("Succesfully connected to database"));
        }).catch((err)=>{
            console.log("Error in connecting",err);
        })        
    }
    break;
    case "File":{
        console.log("Data will be saved to File");
    }
    break;
}
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server started at port 3000");
})