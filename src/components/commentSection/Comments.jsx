import React, { useContext } from "react";
import "./comment.scss";
import { AuthContext } from "../../context/authContext";

const Comment = () => {
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      desc: "Lorem ipsunm dolor sit amet consecteture audspicing ait elit",
      name: "Huey Johnsons",
      userId: "1",
      profilePic:
        "https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
    {
      id: 1,
      desc: "Lorem ipsunm dolor sit amet consecteture audspicing ait elit",
      name: "Lucuis Stone",
      userId: "1",
      profilePic:
        "https://images.pexels.com/photos/3764179/pexels-photo-3764179.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
  ];

  return (
    <div className="comments">
      <div className="write ">
        <img src={currentUser.profilePic} alt={currentUser.profilePic} />
        <input type="text" />
        <button>Post </button>
      </div>

      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <img src={comment.profilePic} alt={comment.profilePic} />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
