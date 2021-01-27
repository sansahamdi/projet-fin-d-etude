const mongoose=require('mongoose')



const MessageSchema = new mongoose.Schema({

    msg:{
        type: String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'enseignant'
    },
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports=mongoose.model('message',MessageSchema)