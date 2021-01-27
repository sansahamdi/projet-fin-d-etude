import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMessage, clearMessage } from "../../js/action/MessageAction";

import "./Style.css";

export const Notification = () => {
  const msg = useSelector((state) => state.messages.msg);
  const loading = useSelector((state) => state.messages.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  if (loading && !msg) {
    return <h2>.....loading</h2>;
  }

  return (
    <div className="card gedf-card mt-3">
      <div className="card-body">
        <h5 className="card-title">Notifications</h5>

        <p className="card-text">
          you have<span className="font-weight-bold">{` ${msg.length}`}</span>
          messages from the administration
        </p>
        {msg.length == 0 ? (
          ""
        ) : (
          <Link to="/profile/all-notification">
            <button className="btn btn-primary">Read</button>
          </Link>
        )}
      </div>
    </div>
  );
};
