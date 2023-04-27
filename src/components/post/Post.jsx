//Individual Post component file
import React, { useState } from "react";
import "./post.scss";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { FavoriteOutlined } from "@mui/icons-material";
import { TextsmsOutlined } from "@mui/icons-material";
import { ShareOutlined } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Comment from "../commentSection/Comments";

const Post = ({ post }) => {
  const [openComment, setOpenComment] = useState(false);

  //Temp like function
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="user-info">
            <img src={post.profilePic} alt={post.profilePic} />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 minute ago </span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt={post.img} />
        </div>
        <div className="info">
          <div className="item" onClick={() => setLiked(!liked)}>
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            12 likes
          </div>
          <div className="item" onClick={() => setOpenComment(!openComment)}>
            <TextsmsOutlined />
            12 comments
          </div>
          <div className="item">
            <ShareOutlined />
          </div>
        </div>
        {openComment && <Comment />}
      </div>
    </div>
  );
};

export default Post;
