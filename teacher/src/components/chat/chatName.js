import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const ChatName = ({ chat, user }) => {
  return (
    <>
      <div className="user">
        {user.map((user) => (
          <div className="name">
            <Link className="lien" to={`/profile/messages/${chat._id}`}>
              {user._id === chat.owner._id ? chat.to.name : chat.owner.name}
            </Link>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default ChatName;
