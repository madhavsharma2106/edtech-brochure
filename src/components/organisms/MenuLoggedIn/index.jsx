import React from "react";
import "./index.scss";
function MenuLoggedIn() {
  return (
    <div className="menu-logged-in">
      <div>
        <img
          className="logo"
          src={require("../../../assets/icons/camp-k-12-logo.svg")}
          alt="Camp K12 Logo"
        />
      </div>
      <div className="user-info">
        <img
          className="icon award"
          src={require("../../../assets/icons/trophy.svg")}
          alt="Awards earned"
        />
        <span className="notifications">
          <img
            className="icon alerts"
            src={require("../../../assets/icons/bell.svg")}
            alt="Awards earned"
          />
          <p className="alert-count">2</p>
        </span>
        <span className="profile">
          <span className="level-info">
            <img
              src={require("../../../assets/icons/skill.svg")}
              alt="Green Badge for points"
            />
            <p>100</p>
          </span>
          <img
            className="profile-icon"
            src="https://picsum.photos/id/1027/34/34"
            alt="John Doe."
          />
          <img
            className="menu-arrow"
            src={require("../../../assets/icons/down-arrow-white.svg")}
            alt="This is a down arrow to open the menu"
          />
        </span>
      </div>
    </div>
  );
}

export default MenuLoggedIn;
