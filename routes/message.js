const express = require('express');
const router = express.Router();
const {check,validationResult}= require('express-validator')
const auth=require('../middleware/authAdmin')
const message= require('../models/Message')

//@ http://localhost:4000/api/msg  * post msg * private
 router.post('/:id',[
    auth,
    [
        check('msg','message is required').not().isEmpty()
    ],
    async(req,res)=>{
        const error=validationResult(req)
        if(!error.isEmpty()) { return res.status(400).send(error.array()) }
           const {msg}=req.body
           const {id}=req.params
        try {
               const newMsg= new message({
                   msg,
                   user:id,
               })
               await newMsg.save()
               res.send(newMsg)

        } catch (err) {
            res.status(500).send([{msg:'server error'}])
        }
    }
])
 
//@ http://localhost:4000/api/msg *get msg * private
router.get('/',auth,async(req,res)=>{
    try {
         const msg= await message.find({user:req.user.id}).sort({date:-1})
         if(!msg) {return res.status(400).send([{msg:"you don't have messages"}])}

         res.send(msg)

    } catch (err) {
        
        res.status(500).send([{msg:'server error'}])
    }
})

module.exports = router;