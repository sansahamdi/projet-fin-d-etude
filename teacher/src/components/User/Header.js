import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTeacherById } from "../../js/action/EditTeacher";
import Modal from "react-modal";
import { FilesUploadComponent } from "./FilesUploadComponent";

import "./User.css";

Modal.setAppElement("#root");

export const Header = ({ user }) => {
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
  return (
    <>
      <FilesUploadComponent user={user} />
      <div className="media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto">
        <img
          src={
            user.img
              ? user.img
              : "https://bootdey.com/img/Content/avatar/avatar1.png"
          }
          alt=""
          className="d-block ui-w-100 rounded-circle"
        />
        <div className="media-body ml-5">
          <h4 className="font-weight-bold mb-4">{`${user.lastName} ${user.name}`}</h4>

          <div className="text-muted mb-4">
            <p>Adresse : {user.adresse}</p>
            <p>Phone : {user.phone}</p>
            <p>Email : {user.email}</p>
            <p>
              Birthday :
              {user.dateOfBirth
                ? `${user.dateOfBirth.slice(0, 10)} /${user.placeOfBirth}`
                : ` / ${user.placeOfBirth}`}
            </p>
            <p>Number of children : {user.children}</p>
            <p>Civil status : {user.civil_status}</p>
          </div>
        </div>
        <i
          className="fas fa-user-edit edit"
          onClick={() => setModalIsOpen(true)}
        ></i>

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
                placeholder="dd-mm-yyyy"
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
      </div>
    </>
  );
};
