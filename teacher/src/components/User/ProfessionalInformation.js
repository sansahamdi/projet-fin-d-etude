import React from "react";
import "./User.css";

export const ProfessionalInformation = ({ user }) => {
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>Professional Information</div>
      </div>
      <div className="card-body">
        <div className="header">
          <p>Grade</p>
          <span>{user.grade?user.grade.grade:""}</span>
        </div>
        <hr />
        <div className="header">
          <p>Level</p>
          <span>{user.level?user.level.level:""}</span>
        </div>
        <hr />
        <div className="header">
          <p>Speciality</p>
          <span>{user.speciality ?user.speciality.speciality:""}</span>
        </div>
        <hr />
        <div className="header">
          <p>Situation</p>
          <span>{user.situation?user.situation.situation:""}</span>
        </div>
        <hr />
        <div className="header">
          <p>Status</p>
          <span>{user.status?user.status:""}</span>
        </div>
        <hr />
        <div className="header">
          <p>Recruitment date</p>
          <span>{user.recruitement_date?user.recruitement_date.slice(0, 10):""}</span>
        </div>
      </div>
    </div>
  );
};
