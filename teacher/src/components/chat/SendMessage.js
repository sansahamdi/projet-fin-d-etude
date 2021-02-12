import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";



import { postMessageChat } from "../../js/action/ChatAction";




const SendMessage = ({ chatId,profId }) => {
  const dispatch = useDispatch();

  console.log(profId)
 
  const [form, setForm] = useState({
    text: "",
  });
  
  
 /*  const [id, setId] = useState()
   console.log(id)
  
    useEffect(() => {
      setId(profId)
    }, [profId])
   
  
    console.log(id)
     */
   
 
  
 

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postMessageChat(chatId,profId, form));
    setForm({
      text: "",
    }); 
  
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
