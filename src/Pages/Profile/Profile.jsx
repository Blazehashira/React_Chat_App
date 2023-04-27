import "./profile.scss";
import { FacebookTwoTone } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Pinterest } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Place } from "@mui/icons-material";
import { LanguageOutlined } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
          alt="cover-pic"
        />
        <img
          className="profilePic"
          src="https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
          alt="profile-pic"
        />
      </div>
      <div className="profile-container">
        <div className="user-socials">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoTone fontSize="medium" />
            </a>
            <a href="https://instagram.com">
              <Instagram fontSize="medium" />
            </a>
            <a href="https://Twitter">
              <Twitter fontSize="medium" />
            </a>
            <a href="https://LinkedIn.com">
              <LinkedIn fontSize="medium" />
            </a>
            <a href="https://Pinterest.com">
              <Pinterest fontSize="medium" />
            </a>
          </div>

          <div className="center">
            <span>Huey Johnsons</span>
            <div className="center-info">
              <div className="center-item">
                <Place />
                <span>Canada</span>
              </div>
              <div className="center-item">
                <LanguageOutlined />
                <span>Hira</span>
              </div>
            </div>
            <button type="submit">Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
