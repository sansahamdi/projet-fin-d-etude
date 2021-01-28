import React from "react";

const ProfInformation = ({ prof }) => {
  return (
    <div className="card mb-4 ml-5" style={{ width: "500px" }}>
      <div className="card-header header">
        <div>Professional Information</div>
      </div>
      <div className="card-body">
        <table className="table table-hover table-striped">
          <tbody>
            <tr>
              <td className="header">
                <strong>GRADE</strong>
                <div>{prof.grade ? prof.grade.grade : "not found"}</div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>LEVEL</strong>{" "}
                <div>{prof.level ? prof.level.level : "not found"}</div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>SPECIALITY</strong>{" "}
                <div>
                  {prof.speciality ? prof.speciality.speciality : "not found"}
                </div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>SITUATION</strong>{" "}
                <div>
                  {prof.situation ? prof.situation.situation : "not found"}
                </div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>STATUS</strong>{" "}
                <div>{prof.status ? prof.status : "not found"}</div>
              </td>
            </tr>
            <tr>
              <td className="header">
                <strong>Recruitment date</strong>{" "}
                <div>
                  {prof.recruitement_date
                    ? prof.recruitement_date.slice(0, 10)
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

export default ProfInformation;
