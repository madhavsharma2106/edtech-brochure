import React from "react";
import { Text } from "../../atoms";
import { TextVariant, TextType } from "../../atoms/Text";
import "./index.scss";
import { MenuLoggedIn } from "../../organisms";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container">
        <MenuLoggedIn />
        <div className="hero-container">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          consequatur molestias veniam officiis id autem quasi nobis ducimus
          voluptas hic!
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
