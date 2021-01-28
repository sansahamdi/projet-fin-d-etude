import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./AccountCard.css";

export const AccountCard = ({ user }) => {
  return (
    <>
      {user.map((user) => (
        <div key={user._id} className="profile-card-4 z-depth-3">
          <div className="card">
            <div className="card-body text-center bg-primary rounded-top">
              <div className="header">
                <div className="ml-5">
                  <div className="user-box">
                    <Link to="/profile/user">
                      <img
                        src={
                          user.img
                            ? user.img
                            : "https://bootdey.com/img/Content/avatar/avatar1.png"
                        }
                        alt="user avatar"
                      />
                    </Link>
                  </div>
                  <h5 className="mb-1 text-white">
                    {`${user.name} ${user.lastName}`}{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Link to="/profile/user">
                <button className="btn btn-primary btn-block mb-1">
                  get profile
                </button>
              </Link>
              <ul className="list-group shadow-none">
                <li className="list-group-item">
                  <div className="header">
                    <div>
                      <Link to="/profile/settings">
                        <i className="fas fa-user-cog"></i>
                        <span>Profile Settings</span>
                      </Link>
                    </div>
                  </div>
                </li>
                {!user.grade && !user.speciality ? (
                  ""
                ) : (
                  <React.Fragment>
                    <li className="list-group-item">
                      <div className="header">
                        <div>
                          <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div>
                          <p>{!user.grade.grade ? "" : user.grade.grade}</p>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="header">
                        <div>
                          <i className="fas fa-info"></i>
                        </div>
                        <div>
                          <p>
                            {!user.speciality.speciality
                              ? ""
                              : user.speciality.speciality}
                          </p>
                        </div>
                      </div>
                    </li>
                  </React.Fragment>
                )}
                <li className="list-group-item">
                  <div className="header">
                    <div>
                      <i className="fas fa-phone-volume"></i>
                    </div>
                    <div>
                      <p>{user.phone ? user.phone : "phone"}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
