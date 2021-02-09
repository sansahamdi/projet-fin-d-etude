import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import { postMessageChat } from "../../js/action/ChatAction";



const SendMessage = ({ chatId, user, msg }) => {
  const dispatch = useDispatch();

  const [profId, setProfId] = useState();
  const [form, setForm] = useState({
    text: "",
  });
  /* const [chat,setChat] = useState({
    message: "",
    name:user.name,
  }); */

  useEffect( () => {
    let prof;
    
     
    const message =  msg;
    if (user._id === message.owner._id) {
      prof = message.to._id;
    } else {
      prof = message.owner._id;
    }
  
    
    setProfId(prof);
  }, []);

 

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postMessageChat(chatId, profId, form));
    setForm({
      text: "",
    }); 
   /*  const {message,name}=chat
    socket.emit("messages",{name,message}) */
  };
         
  return (
    <>
      <form onSubmit={onSubmit} id="text-msg">
        <input
          type="text"
          value={form.text}
          onChange={(e) =>
            setForm((form) => ({ ...form,text: e.target.value }))
          }
          placeholder="....."
        />
      </form>
    </>
  );
};

export default SendMessage;
