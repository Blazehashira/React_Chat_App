import "./posts.scss";
import React from "react";
import Post from "../post/Post";
const Posts = () => {
  //Temporary Data
  const posts = [
    {
      id: 1,
      name: "Sandra Xavier",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/4198141/pexels-photo-4198141.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Milly Cho",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/7204870/pexels-photo-7204870.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/1805895/pexels-photo-1805895.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Abel Higgins",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/2131980/pexels-photo-2131980.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      img: "https://images.pexels.com/photos/11144787/pexels-photo-11144787.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
