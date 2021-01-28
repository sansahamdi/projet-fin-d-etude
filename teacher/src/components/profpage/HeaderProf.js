import React from "react";

export const HeaderProf = ({ prof, postProf }) => {
  return (
    <div className="profile-card-4 z-depth-3">
      <div className="card">
        <div className="card-body text-center bg-primary rounded-top">
          <div className="header">
            <div className="ml-5 mt-4 container">
              <div className="user-box">
                <img
                  src={
                    prof
                      ? prof.img
                      : "https://bootdey.com/img/Content/avatar/avatar1.png"
                  }
                  alt="user avatar"
                />
              </div>
              <h5 className="mb-1 text-white">{prof.name}</h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group shadow-none">
            <li className="list-group-item">
              <div className="header">
                <div>
                  <i class="fas fa-phone-alt"></i>
                  <span>phone</span>
                </div>
                <div>
                  <p>{prof.phone}</p>
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
                  <p>{prof.email}</p>
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
                  <p>{prof.adresse}</p>
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
                    {prof.dateOfBirth
                      ? `${prof.dateOfBirth.slice(0, 10)} /${prof.placeOfBirth}`
                      : ` / ${prof.placeOfBirth}`}
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
                  <p>{prof.children ? prof.children : "not found"}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
