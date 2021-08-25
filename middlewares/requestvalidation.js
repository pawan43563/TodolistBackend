const sendResponse=require("../utils/sendResponse")

// validation 
module.exports=(req,res,next)=>{
    if(!req.body.content){
        return sendResponse({
            res,
            statusCode: 404,
            message: "Empty content",
            error: "Empty content not allowed",
        });
    }
    let Validkeys=["content","createdAt","updatedAt"];
    if(req.params.id){
        Validkeys.push("isComplete")
    }
    flag = Validkeys.every((key)=>Object.keys(req.body).includes(key));
    if(!flag){
        return sendResponse({
            res,
            statusCode: 404,
            message: "Invalid Keys",
            error: "Invalid Request",
        });
    }


    next();

}
