import "./leftBar.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <span>Friends</span>
          </div>
          <div className="item">
            <span>Groups</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <span>Events</span>
          </div>
          <div className="item">
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
