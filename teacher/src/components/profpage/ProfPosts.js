import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../js/action/ProfAction";
import Commenter from "../home/Commenter";

import { likePost } from "../../js/action/ProfAction";
import "./Style.css";
const ProfpostProf = ({ postProf }) => {
  const dispatch = useDispatch();

  const [like, setLike] = useState(true);
  const [show, setShow] = useState(false);
  const [form, setText] = useState({
    text: "",
  });

  const onSubmitcomment = (e) => {
    e.preventDefault();
    dispatch(addComment(postProf._id, form));
    setText({
      text: "",
    });
  };

  const postLike = () => {
    dispatch(likePost(postProf._id, like));
    setLike(!like);
  };

  return (
    <>
      <div className="card gedf-card post-position">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src={
                    postProf
                      ? postProf.user.img
                      : "https://bootdey.com/img/Content/avatar/avatar1.png"
                  }
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h7 text-muted">{postProf.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <i className="fa fa-clock-o"></i>2021
          </div>

          <p className="card-text">{postProf.text}</p>
        </div>
        <div className="card-footer post-delete">
          <p className="mt-3">
            <i class="fas fa-thumbs-up" onClick={postLike}></i>{" "}
            {postProf.like.length > 0 ? `${postProf.like.length} like` : "like"}
            <i className="fa fa-comment pointer "></i>
            <span onClick={() => setShow(!show)}>
              {postProf.comment.length > 0
                ? `${postProf.comment.length} Comment`
                : "comment"}
            </span>
          </p>
        </div>
        {show && (
          <>
            {postProf.comment.map((comment) => (
              <Commenter
                comment={comment}
                postId={postProf._id}
                prof={"prof"}
              />
            ))}
            <br />
            <form onSubmit={onSubmitcomment}>
              <input
                type="text"
                onChange={(e) => setText({ ...form, text: e.target.value })}
                value={form.text}
                placeholder="commenter"
              />
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ProfpostProf;
