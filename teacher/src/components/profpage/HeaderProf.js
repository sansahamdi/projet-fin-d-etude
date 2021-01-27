import React from "react";

export const HeaderProf = ({ prof, postProf }) => {
  return (
    <div className="media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto">
      <img
        src={
          prof ? prof.img : "https://bootdey.com/img/Content/avatar/avatar1.png"
        }
        alt=""
        className="d-block ui-w-100 rounded-circle"
      />
      <div className="media-body ml-5">
        <h4 className="font-weight-bold mb-4">{prof.name}</h4>

        <div className="text-muted mb-4">
          <p>Adresse :{prof.adresse}</p>
          <p>Phone : {prof.phone}</p>

          <p>
            Birthday :
            {prof.dateOfBirth
              ? `${prof.dateOfBirth.slice(0, 10)} /${prof.placeOfBirth}`
              : ` / ${prof.placeOfBirth}`}
          </p>
          <p>Number of children : {prof.children}</p>
          <p>Civil status : {prof.status}</p>
        </div>
      </div>
    </div>
  );
};
