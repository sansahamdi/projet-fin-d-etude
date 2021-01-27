import React, { useState } from "react";
import axios from "axios";
import { editTeacherById } from "../../js/action/EditTeacher";

import { useDispatch } from "react-redux";

export const FilesUploadComponent = ({ user }) => {
  const dispatch = useDispatch();

  const [profileImg, setProfileImg] = useState("");
  console.log(profileImg);

  const onFileChange = (e) => {
    setProfileImg(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    axios
      .post("http://localhost:4000/api/user-profile", formData, {})
      .then((res) => {
        dispatch(
          editTeacherById(user._id, { img: res.data.imgCreated.profileImg })
        );
      });
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmit}>
          <h3>React File Upload</h3>
          <div className="form-group">
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
