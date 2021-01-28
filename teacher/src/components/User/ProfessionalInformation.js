import React from "react";
import "./User.css";

export const ProfessionalInformation = ({ user }) => {
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>Professional Information</div>
      </div>
      <div className="card-body">
        <table className="table table-hover table-striped">
          <tbody>
            <tr>
              <td className="header">
                <strong>GRADE</strong>
                <div>{user.grade ? user.grade.grade : "not found"}</div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>LEVEL</strong>{" "}
                <div>{user.level ? user.level.level : "not found"}</div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>SPECIALITY</strong>{" "}
                <div>
                  {user.speciality ? user.speciality.speciality : "not found"}
                </div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>SITUATION</strong>{" "}
                <div>
                  {user.situation ? user.situation.situation : "not found"}
                </div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>STATUS</strong>{" "}
                <div>{user.status ? user.status : "not found"}</div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>Recruitment date</strong>{" "}
                <div>
                  {user.recruitement_date
                    ? user.recruitement_date.slice(0, 10)
                    : "not found"}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
