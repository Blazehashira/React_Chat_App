import React from "react";
import "./rightbar.scss";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/3760767/pexels-photo-3760767.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <span>Lila Gomes</span>
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>

          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/1656306/pexels-photo-1656306.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <span>John Hawkins</span>
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>
        </div>

        {/* Latest Activities  section*/}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/7204870/pexels-photo-7204870.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <p>
                <span>Milly</span> commented
              </p>
            </div>
            <span>3 minutes ago</span>
          </div>

          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/2131980/pexels-photo-2131980.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <p>
                <span>Abel</span> added a friend
              </p>
            </div>
            <span>4 minutes ago</span>
          </div>

          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/3764179/pexels-photo-3764179.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <p>
                <span>Lucuis</span> joins Hira
              </p>
            </div>
            <span>6 minutes ago</span>
          </div>
        </div>
        {/* section end */}

        {/* Online friends section */}
        <div className="item">
          <span> Online friends</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/7204870/pexels-photo-7204870.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <div className="online"></div>
              <span>Milly Cho</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/2131980/pexels-photo-2131980.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <div className="online"></div>
              <span>Abel Higgins</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <div className="online"></div>
              <span>Sandra Xavier</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/3764179/pexels-photo-3764179.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=1"
                alt="smile"
              />
              <div className="online"></div>
              <span>Lucuis Stone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
