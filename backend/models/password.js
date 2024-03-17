const mongoose=require('mongoose')

const passwordSchema=new mongoose.Schema({
    title : String,
    body : String,

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});


const Password=mongoose.model('Password',passwordSchema)

module.exports=Password