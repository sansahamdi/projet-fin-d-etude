import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUserChat,clearChat } from "../../js/action/ChatAction";
import ChatMessages from "./ChatMessages";
import ChatName from "./chatName";
import message from "../asset/messages.png";

import "./Style.css";



const Chat = () => {
  const user = useSelector((state) => state.authReducer.user);
  const chats = useSelector((state) => state.userChat.chats);
  const loading = useSelector((state) => state.userChat.loading);

  const dispatch = useDispatch();
  

   useEffect(() => {
    dispatch(getUserChat());
    return ()=>{
      dispatch(clearChat())
    }
  },[dispatch]); 

  if (loading && !chats) {
    return <p>....loading</p>;
  }
    

  return (
    <div className="chat-page ">
      <div>
        <div className="rows row-broken">
          <div className="col-sm-3 col-xs-12">
            <div
              className="col-inside-lg decor-default chat chat-name"
              tabindex="5000"
            >
              <div className="chat-users"></div>
              <div className="chat-users">
                <h6>Messages</h6>
                <hr />
                {chats === null
                  ? "messages not found"
                  : chats.map((chat) => <ChatName chat={chat} user={user} />)}
              </div>
            </div>
          </div>
          <div className="chat-position">
            <Route
              path="/profile/messages/:id"
              render={(props) => (
                <ChatMessages chats={chats} user={user} {...props} />
              )}
            />
            <Route
              exact
              path="/profile/messages"
              render={() => (
                <div className="img-msg">
                  <img src={message} alt="messages" />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
