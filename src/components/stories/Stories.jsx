import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary Data

  const stories = [
    {
      id: 1,
      name: "Lucuis Stone",
      img: "https://images.pexels.com/photos/3764179/pexels-photo-3764179.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Milly Cho",
      img: "https://images.pexels.com/photos/7204870/pexels-photo-7204870.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Sandra Xavier",
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Abel Higgins",
      img: "https://images.pexels.com/photos/2131980/pexels-photo-2131980.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt={currentUser.profilePic}></img>
        <span>{currentUser.name}</span>
        <button type="submit">+</button>
      </div>
      {stories.map((story) => {
        return (
          <div key={story.id} className="story">
            <img src={story.img} alt={story.img}></img>
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
