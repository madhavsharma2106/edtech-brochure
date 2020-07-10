import React from "react";
import { Text } from "../../atoms";
import { TextVariant, TextType } from "../../atoms/Text";

function HeroContainer() {
  return (
    <div className="hero-container">
      <div>
        <div className="text">
          <Text variant={TextVariant.headingOne}>
            Welcome to the school of the future.
          </Text>
          <Text variant={TextVariant.headingText}>
            Cutting-edge technology courses for Ages 8 - 18. Unlock
            <Text
              style={{ marginLeft: "5px" }}
              type={TextType.span}
              variant={TextVariant.highlightOne}
            >
              21st century skills
            </Text>
            , earn
            <img
              src={require("../../../assets/icons/coin.svg")}
              alt="Coin"
              className="badge"
            />
            , and build a college-ready portfolio as you learn.
          </Text>
        </div>
      </div>
      <img
        className="image"
        src={require("../../../assets/images/header-photo/header-photo.png")}
        srcSet={
          (require("../../../assets/images/header-photo/header-photo@2x.png"),
          require("../../../assets/images/header-photo/header-photo@3x.png"))
        }
        alt="A young child learning to code and smiling into the camera"
      />
    </div>
  );
}

export default HeroContainer;
