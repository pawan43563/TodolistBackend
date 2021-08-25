const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let todoSchema = new Schema({
    taskId:{
        type:String,
        unique:true,
        required:[true,"TaskId should be provided"]
    },
    content: {
        type: String,
        required:[true,"Tasks cannot be created without content"],
        minLength:[2,"Content has to be greater than 1"]
    },
    createdAt: {
        type: String,
        required:true,
        validate:{
            validator:function(v){
                return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}[,]\s(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(v)
            },
            message:props=>`${props.value} is not a valid date `
        }
    },
    updatedAt:{
        type:String,
        default:"",
        validate:{
            
            validator:function(v){
                if(v===""){
                    return true
                }
                return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}[,]\s(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(v)
            },
            message:props=>`${props.value} is not a valid date `
        }
    },
    isComplete:{
        type:Boolean,
        default:false,
    }
})

todoSchema.index({content:"text"})

module.exports = {
    "Todo":mongoose.model('todos', todoSchema)
}

