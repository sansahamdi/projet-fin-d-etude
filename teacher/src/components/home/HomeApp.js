import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { AccountCard } from "./AccountCard";
import { AddPost } from "./AddPost";
import { Post } from "./Post";
import { Notification } from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../js/action/authAction";
import { getPosts, clearPosts } from "../../js/action/PostsAction";
import ButtonPosts from "./ButtonPosts";

import "react-calendar/dist/Calendar.css";
import "./Style.css";

export const HomeApp = () => {
  const user = useSelector((state) => state.authReducer.user);
  const loading = useSelector((state) => state.authReducer.loading);
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.loading);
  const  counter = useSelector((state) => state.userChat. counter);
  console.log(counter)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());

    dispatch(getPosts({ page: 1, limit: 2 }));
    return () => {
      dispatch(clearPosts());
    };
  }, [dispatch]);

  if (loading || !user) {
    return <p>.....loading</p>;
  }
  if (isLoading || !posts) {
    return <p>.....loading</p>;
  }

  if (!user) {
    return "user not found";
  }
  if (!posts) {
    return <p>posts not found</p>;
  }

  return (
    <div className="container gedf-wrapper">
      <div className="row">
        <div className="col-md-3">
          <div className="profile-card">
            {user ? <AccountCard user={user} /> : "user notfound"}
          </div>
        </div>
        <div className="col-md-6 gedf-main">
          <AddPost />
          {posts.map((posts) =>
            posts.map((posts) => (
              <Post key={posts._id} posts={posts} user={user} />
            ))
          )}
          <ButtonPosts />
        </div>
        <div className=" calendre-profile">
          <div className="card-calendar">
            <Calendar />
          </div>
          <Notification />
        </div>
        <Link to="/profile/messages">
          {""}
          <i class="fas fa-envelope link-msg"></i>{" "}
        </Link>
      </div>
    </div>
  );
};
