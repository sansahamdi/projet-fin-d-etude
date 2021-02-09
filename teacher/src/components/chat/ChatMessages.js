import React, { Fragment, useRef, useEffect } from "react";

import SendMessage from "./SendMessage";
import "./Style.css";



const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const ChatMessages = ({ chats, match, user }) => {
  const msg = chats.find((msg) => msg._id === match.params.id);

  

  let profName;

  if (!msg || !user) {
    return <p>....loading</p>;
  }

  for (let i = 0; i < user.length; i++) {
    if (user[i]._id === msg.owner._id) {
      profName = msg.to.name;
    } else {
      profName = msg.owner.name;
    }
  }

  /* const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      } */

  return (
    <>
      {!msg
        ? ""
        : msg.msg.map((msg) => (
            <Fragment>
              {user.map((user) => (
                <>
                  <ul
                    className={
                      user._id === msg.owner
                        ? "contain msg-to "
                        : "contain darker"
                    }
                  >
                    <li>
                      {" "}
                      {user._id === msg.owner
                        ? `${user.name} : ${msg.text}`
                        : `${profName}: ${msg.text}`}{" "}
                    </li>
                    <span
                      className={
                        user._id === msg.owner ? "time-right" : "time-left"
                      }
                    >
                      11:00
                    </span>
                  </ul>
                  <AlwaysScrollToBottom />
                </>
              ))}
            </Fragment>
          ))}

      {user.map((user) => (
        <SendMessage chatId={match.params.id} user={user} msg={msg} />
      ))}
    </>
  );
};

export default ChatMessages;
