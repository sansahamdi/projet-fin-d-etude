import React from "react";
import { LatestPosts } from "./LatestPosts";
import "./User.css";

export const GetPosts = ({ post, user }) => {
  return (
    <div className="card mb-4">
      <div className="card-header header">
        <div>Latest Posts</div>
      </div>
      <div className="card-body">
        {post.map((post) => (
          <LatestPosts key={post._id} post={post} user={user} />
        ))}
      </div>
    </div>
  );
};
