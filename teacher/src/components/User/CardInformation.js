import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTeacherById } from "../../js/action/EditTeacher";
import Modal from "react-modal";
import { FilesUploadComponent } from "./FilesUploadComponent";

import "./CardInformation.css";
// import "./User.css";

Modal.setAppElement("#root");

export const CardInformation = ({ user }) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    lastName: user.lastName,
    adresse: user.adresse,
    phone: user.phone,
    email: user.email,
    startDate: user.dateOfBirth,
    placeOfBirth: user.placeOfBirth,
    children: user.children,
    civil_status: user.civil_status,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTeacherById(user._id, form));

    setModalIsOpen(false);
  };
  console.log(user);

  return (
    <div className="profile-card-4 z-depth-3">
      <div className="card">
        <div className="card-body text-center bg-primary rounded-top">
          <div className="header">
            <div className="ml-5 mt-4">
              <div className="user-box">
                <img
                  src={
                    user.img
                      ? user.img
                      : "https://bootdey.com/img/Content/avatar/avatar1.png"
                  }
                  alt="user avatar"
                />
              </div>
              <h5 className="mb-1 text-white">{`${user.lastName} ${user.name}`}</h5>
            </div>
            <div className="mb-5 mr-5">
              <FilesUploadComponent user={user} />
            </div>
          </div>
        </div>
        <div className="card-body">
          <button
            onClick={() => setModalIsOpen(true)}
            className="btn btn-primary btn-block mb-1"
          >
            Edit Profile
          </button>
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: { backgroundColor: "rgba(0,0,0,0.2)" },
              content: {
                width: "50%",
                height: "70%",
                margin: "0 auto",
                marginTop: "50px",
              },
            }}
          >
            <form>
              <div className="form-group">
                <h2 className="text-center mt-3">Edit Teacher</h2>
                <label className="mt-3">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
                <br />
                <label className="mt-3">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your firstName"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <br />
                <label for="fullName">Date of Birthday</label>
                <br />
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder={form.dateOfBirth}
                  value={form.dateOfBirth}
                  min="1960-01-01"
                  max="2030-12-31"
                  onChange={handleChange}
                />
                <br />
                <label className="mt-3">Birthplace</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your birthplace"
                  onChange={handleChange}
                  value={form.placeOfBirth}
                  name="placeOfBirth"
                />
                <label className="mt-3">Adress</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your adress"
                  name="adresse"
                  value={form.adresse}
                  onChange={handleChange}
                />
                <label className="mt-3">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <label className="mt-3">Number of children</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your"
                  name="children"
                  value={form.children}
                  onChange={handleChange}
                />
                <label className="mt-3">Civil status</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your civil status"
                  name="civil_status"
                  value={form.civil_status}
                  onChange={handleChange}
                />
              </div>
            </form>
            <div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </Modal>
          <ul className="list-group shadow-none">
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i class="fas fa-phone-alt"></i>
                  <span>phone</span>
                </div>
                <div>
                  <p>32165165</p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i className="fa fa-envelope"></i>
                  <span>email</span>
                </div>
                <div>
                  <p>{user.email}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i class="fas fa-map-marker-alt"></i>
                  <span>adress</span>
                </div>
                <div>
                  <p>{user.adresse}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i class="fas fa-birthday-cake"></i>
                  <span>birthday</span>
                </div>
                <div>
                  <p>
                    {user.dateOfBirth
                      ? `${user.dateOfBirth.slice(0, 10)} /${user.placeOfBirth}`
                      : ` / ${user.placeOfBirth}`}
                  </p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i class="fas fa-info"></i>
                  <span>children</span>
                </div>
                <div>
                  <p>{user.children}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i class="fas fa-info"></i>
                  <span>civil status</span>
                </div>
                <div>
                  <p>{user.civil_status}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i class="fas fa-id-card"></i>
                  <span>CIN</span>
                </div>
                <div>
                  <p>{user.cin}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i class="fas fa-venus-mars"></i>
                  <span>Sexe</span>
                </div>
                <div>
                  <p>{user.sexe}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
