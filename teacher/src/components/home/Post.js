import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { likePost } from "../../js/action/PostsAction";
import { addComment, deletePost } from "../../js/action/PostsAction";

import photo from "../asset/inconnu.png";

import Commenter from "./Commenter";
import "./Style.css";

export const Post = ({ posts, user }) => {
  const [like, setLike] = useState(true);
  const [show, setShow] = useState(false);
  const [form, setText] = useState({
    text: "",
  });
  const dispatch = useDispatch();

  const onSubmitcomment = (e) => {
    e.preventDefault();
    dispatch(addComment(posts._id, form));
    setText({
      text: "",
    });
  };

  const postDelete = () => {
    dispatch(deletePost(posts._id));
  };

  const postLike = () => {
    dispatch(likePost(posts._id, like));
    setLike(!like);
  };

  return (
    <div className="card gedf-card">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mr-2">
              {user.map((user) =>
                user._id === posts.user._id || user._id === posts.user ? (
                  <img
                    key={user._id}
                    className="rounded-circle"
                    width="45"
                    src={user.img ? user.img : photo}
                    alt=""
                  />
                ) : (
                  <Link to={`/profile/${posts.user._id}`}>
                    {" "}
                    <img
                      className="rounded-circle"
                      width="45"
                      src={posts.img ? posts.user.img : photo}
                      alt=""
                    />
                  </Link>
                )
              )}
            </div>
            <div className="ml-2">
              <div className="h7 text-muted">
                {posts.user.name ? posts.user.name : posts.name}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="text-muted h7 mb-2">
          <i className="fa fa-clock-o"></i>2020
        </div>

        <p className="card-text">{posts.text}</p>
      </div>
      <div className="card-footer post-delete">
        <p className="mt-3">
          <i className="fas fa-thumbs-up" onClick={postLike}></i>{" "}
          {posts.like.length > 0 ? `${posts.like.length} like` : "like"}
          <i className="fa fa-comment pointer "></i>
          <span onClick={() => setShow(!show)}>
            {posts.comment.length > 0
              ? `${posts.comment.length} Comment`
              : "comment"}
          </span>
        </p>
        {user.map((user) =>
          user._id === posts.user._id || user._id === posts.user ? (
            <p className="mt-3" onClick={postDelete}>
              <i className="far fa-trash-alt "></i>
            </p>
          ) : (
            ""
          )
        )}
      </div>
      {show && (
        <>
          {posts.comment.map((comment) => (
            <Commenter key={comment._id} comment={comment} postId={posts._id} />
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
  );
};
