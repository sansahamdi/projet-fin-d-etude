import React from "react";
import "./User.css";

export const DateEmployee = ({ user }) => {
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>Date related to employee</div>
      </div>
      <div className="card-body">
        <div className="header">
          <p>CIN</p>
          <span>{user.cin}</span>
        </div>
        <hr />
        <div className="header">
          <p>Sexe</p>
          <span>{user.sexe}</span>
        </div>
        <hr />
        <div className="header">
          <p>Civil Status</p>
          <span>{user.civil_status}</span>
        </div>
      </div>
    </div>
  );
};
