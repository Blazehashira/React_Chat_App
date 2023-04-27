import React, { useContext } from "react";
import "./leftbar.scss";
import friend from "../../assets/friends.png";
import groups from "../../assets/group.png";
import messages from "../../assets/chat-bubble.png";
import memories from "../../assets/back-in-time.png";
import reels from "../../assets/film-reel.png";
import videos from "../../assets/tv.png";
import gallery from "../../assets/burst.png";
import bookmarks from "../../assets/bookmark.png";
import { AuthContext } from "../../context/authContext";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="Userpic" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={friend} alt="friend Icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={groups} alt="cGroup" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={messages} alt="Messages" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src={memories} alt="Memories" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <img src={reels} alt="Reel" />
            <span>Reels</span>
          </div>
          <div className="item">
            <img src={videos} alt="Videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={bookmarks} alt="Bookmark" />
            <span>Bookmarks</span>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Leftbar;
