const express = require("express");
const router = express.Router();

const Message = require("../models/Messages");
const Enseignant = require("../models/Enseignant");
const auth = require("../middleware/authAdmin");
const { check, validationResult } = require("express-validator");

//@ http//localhost:4000/chat  *post chat or update chat *private
router.post(
  "/:chatId/prof/:id",
  [auth, [check("text", "enter your message").not().isEmpty()]],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { id, chatId } = req.params;
    const { text } = req.body;

    try {
      let message = await Message.findById(chatId);
      const user = await Enseignant.findById(req.user.id);

      if (!message) {
        message = new Message({
          msg: [{ text, owner: user._id, to: id }],
          owner: user._id,
          to: id,
        });
        await message.save();
        
        res.send(message);

      } else {
        message = await Message.findOneAndUpdate(
          { _id: chatId },
          { $set: { date: Date.now() } }
        );
        const newMsg = { text, owner: user._id, to: id };
        message.msg.push(newMsg);
        await message.save();
        Message.emit("add",newMsg,id)
        
        res.send(message.msg);
       
      }
     
        

    } catch (err) {
      if (err.kind === "ObjectId") {
        res.status(400).send([{ msg: "chat not found" }]);
      }
    }
  }
);

//@ http://localhost:4000/api/chat *delete chats *private
router.delete("/:_id", auth, async (req, res) => {
  const { _id } = req.params;
  try {
    const chatRemove = await Message.findOneAndDelete({ _id });

    res.send(chatRemove);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

//@ http://localhost:4000/api/chat  *get chats * private
router.get("/", auth, async (req, res) => {
  try {
    const chats = await Message.find({
      $or: [{ owner: req.user.id }, { to: req.user.id }],
    })
      .sort({ date: -1 })
      .populate({ path: "owner", select: "name" })
      .populate({ path: "to", select: "name" });

    if (chats.length > 0) {
      return res.send(chats);
    }

    res.status(400).send([{ msg: "messages not found" }]);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

// http://localhost:4000/api/chat/id
router.get("/prof/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    const chats = await Message.find({
      $or: [{ owner: req.user.id }, { to: req.user.id }],
    });

    if (chats.length === 0) {
      return res.status(400).send([{ msg: "messages not found" }]);
    }
    const profMsg = chats.filter(
      (msg) => msg.owner.toString() === id || msg.to.toString() === id
    );
    if (profMsg.length === 0) {
      return res.status(400).send([{ msg: "chat not found" }]);
    }

    res.send(profMsg);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

router.get("/all", auth, async (req, res) => {
  try {
    const chats = await Message.find();
    console.log(chats);
    res.send(chats);
  } catch (err) {
    res.status(500).send([{ msg: "server error" }]);
  }
});

//http://localhost:4000//api/discussion * update readed *private
router.put('/:chatId',auth,async(req,res)=>{
  const {chatId}=req.params
  try {
       const chat= await Message.findById(chatId)
       if(!chat){ return res.status(400).send([{msg:"chat not found"}]) }
       const readed =chat.readed
       chat.readed=!readed
       await chat.save()
       res.send(chat)

  } catch (err) {
    res.status(500).send([{msg:"server error"}])
  }
})
//http://localhost:4000//api/discussion * update readed *private
router.put('/cancel/:chatId',auth,async(req,res)=>{
  const {chatId}=req.params
  try {
       const chat= await Message.findById(chatId)
       if(!chat){ return res.status(400).send([{msg:"chat not found"}]) }
       
       chat.readed=true
       await chat.save()
       res.send(chat)

  } catch (err) {
    res.status(500).send([{msg:"server error"}])
  }
})

module.exports = router;
