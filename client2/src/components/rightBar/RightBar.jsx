import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Barack Obama</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://mascothalloffame.com/wp-content/uploads/bb-plugin/cache/SamII-e1678881839826-circle.jpg"
                alt=""
              />
              <span>Sammy Spartan</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
