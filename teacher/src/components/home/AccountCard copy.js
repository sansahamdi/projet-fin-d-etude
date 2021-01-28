import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./AccountCard.css";

export const AccountCard = ({ user }) => {
  return (
    <>
      {user.map((user) => (
        <div className="container mb-4">
          <div className="row">
            <div className="col-lg-4 pb-5 content">
              <div className="author-card pb-3 img-card">
                <div className="author-card-profile">
                  <div className="author-card-avatar round-img">
                    <Link to="/profile/user">
                      {" "}
                      <img
                        style={{ width: "100%", height: "50%" }}
                        src={
                          user.img
                            ? user.img
                            : "https://bootdey.com/img/Content/avatar/avatar1.png"
                        }
                        alt="Daniel Adams"
                      />
                    </Link>
                  </div>
                  <div className="author-card-details">
                    <h5 className="author-card-name text-lg">{`${user.lastName} ${user.name}`}</h5>
                    <span className="author-card-position">2020</span>
                  </div>
                </div>
              </div>
              <div className="wizard card-position">
                <nav className="list-group list-group-flush">
                  <Link className="list-group-item" to="/profile/settings">
                    <i className="fa fa-user text-muted"></i>Profile Settings
                  </Link>
                </nav>
                {!user.grade && !user.speciality ? (
                  ""
                ) : (
                  <Fragment>
                    <hr />
                    <p>{!user.grade.grade ? "" : user.grade.grade}</p>
                    <hr />
                    <p>
                      {!user.speciality.speciality
                        ? ""
                        : user.speciality.speciality}
                    </p>
                  </Fragment>
                )}
                <hr />
                <p>
                  <i class="fas fa-phone-alt"></i>
                  {user.phone ? " " + user.phone : " " + "phone"}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
