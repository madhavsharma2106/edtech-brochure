import React, { useState } from "react";
import "./index.scss";
import { Text, Button } from "../../atoms";
import { TextType, TextVariant } from "../../atoms/Text";
import { ButtonVariant } from "../../atoms/Button";

function Menu() {
  return (
    <>
      <MenuMobile />
      <div className="menu">
        <div>
          <img
            className="logo"
            src={require("../../../assets/icons/camp-k-12-logo.svg")}
            alt="Camp K12 Logo"
          />
        </div>
        <div className="links">
          <Text type={TextType.span} variant={TextVariant.menuText}>
            Online Courses
          </Text>
          <Text type={TextType.span} variant={TextVariant.menuText}>
            Offline Camps
          </Text>
          <Text type={TextType.span} variant={TextVariant.menuText}>
            Refer & Earn
          </Text>
        </div>
        <div className="user-info">
          <img
            className="icon award"
            src={require("../../../assets/icons/trophy.svg")}
            alt="Awards earned"
          />
          <Button variant={ButtonVariant.primaryOne}>FREE TRIAL</Button>
          <Button variant={ButtonVariant.primaryOne}>LOGIN</Button>
        </div>
      </div>
    </>
  );
}

export default Menu;

function MenuMobile() {
  const [menuState, setMenuState] = useState(true);

  return (
    <div className="menu-mobile">
      {menuState ? (
        <div className="closed">
          <img
            className="logo"
            src={require("../../../assets/icons/camp-k-12-logo.svg")}
            alt="Camp K12 Logo"
          />
          <img
            src={require("../../../assets/icons/down-arrow-white.svg")}
            alt="Use this to open the menu"
            onClick={() => setMenuState(false)}
          />
        </div>
      ) : (
        <div className="open">
          <img
            className="toggle"
            src={require("../../../assets/icons/down-arrow-white.svg")}
            alt="Use this to open the menu"
            onClick={() => setMenuState(true)}
          />
          <Text type={TextType.span} variant={TextVariant.menuText}>
            Online Courses
          </Text>
          <Text type={TextType.span} variant={TextVariant.menuText}>
            Offline Camps
          </Text>
          <Text type={TextType.span} variant={TextVariant.menuText}>
            Refer & Earn
          </Text>
          <img
            className="icon award"
            src={require("../../../assets/icons/trophy.svg")}
            alt="Awards earned"
          />
          <Button variant={ButtonVariant.primaryOne}>FREE TRIAL</Button>
          <Button variant={ButtonVariant.primaryOne}>LOGIN</Button>
        </div>
      )}
    </div>
  );
}
