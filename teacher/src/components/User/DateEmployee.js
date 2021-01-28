import React from "react";
import "./User.css";

export const DateEmployee = ({ user }) => {
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>Note</div>
      </div>
      <div className="card-body">
        <div className="header">
          <p>person entitled</p>
          <span>{user.titulaire ? user.titulaire : "not found"}</span>
        </div>
        <hr />
        <div className="header">
          <p>Note</p>
          <span>{user.note ? user.note : "not found"}</span>
        </div>
      </div>
    </div>
  );
};
