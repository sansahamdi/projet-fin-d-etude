const mongoose=require('mongoose')


const MessagesSchema= new mongoose.Schema({
    

        
          msg:  [
              {
              text:{
                type:String ,
                required:true ,
            },
            owner:{
                type: mongoose.Schema.Types.ObjectId ,
                ref:'enseignant'
            },
            to:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'enseignat'
            },
          }
        ],
            owner:{
                type: mongoose.Schema.Types.ObjectId ,
                ref:'enseignant'
            },
            to:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'enseignant'
            },
            IdDisc :{
              type :String,
              
            },
            date:{
                type:Date,
                default:Date.now,
            }
        
    
})


module.exports= mongoose.model("message",MessagesSchema)