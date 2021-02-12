import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import {readedChat} from "../../js/action/ChatAction"
import "./Style.css";

const ChatName = ({ chat, user }) => {
        
     const dispatch=useDispatch()

    const upReadedChat=()=>{
         dispatch(readedChat(chat._id))
    }

  return (
    <>
      <div className="user">
        {user.map((user) => (
          <div className="name">
            <Link className="lien" to={`/profile/messages/${chat._id}`}>
              <span onClick={upReadedChat} >{user._id === chat.owner._id ? chat.to.name : chat.owner.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default ChatName;
