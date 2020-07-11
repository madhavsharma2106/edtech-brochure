import React from "react";
import "./index.scss";
import { Text } from "../../atoms";
import { TextVariant, TextType } from "../../atoms/Text";
function CourseCardSecondary() {
  return (
    <div className="course-card-secondary-wrapper">
      <div className="mask"></div>
      <div className="course-card-secondary">
        <div className="horizontal-line">
          <div className="title">
            <Text variant={TextVariant.titleTwo}>
              AI & Machine Learning: Code Intellegent Bots
            </Text>
            <Text variant={TextVariant.titleThree} type={TextType.span}>
              LEVEL <span className="highlight">1 </span>
            </Text>
            <Text variant={TextVariant.titleThree} type={TextType.span}>
              GRADES <span className="highlight">5-8</span>
            </Text>
          </div>
        </div>
        <div className="event-details horizontal-line">
          <div className="detail">
            <img
              src={require("../../../assets/icons/path.svg")}
              alt="Calendear"
            />
            <Text type={TextType.span} variant={TextVariant.subTextOne}>
              <span className="highlight"> 5.6k </span> Happy Students
            </Text>
          </div>
          <div className="detail">
            <img
              src={require("../../../assets/icons/hour-glass.svg")}
              alt="Calendear"
            />
            <Text type={TextType.span} variant={TextVariant.subTextOne}>
              <span className="highlight">12 Hours </span> over 6 Sessions
            </Text>
          </div>
          <div className="detail">
            <img
              src={require("../../../assets/icons/mutiple-people.svg")}
              alt="Calendear"
            />
            <Text type={TextType.span} variant={TextVariant.subTextOne}>
              Weekend and Weekday Batches
            </Text>
          </div>
          <div className="cost">
            <div className="price">
              <img
                src={require("../../../assets/icons/rupee.svg")}
                alt="Rupee Symbol"
              />
              <Text variant={TextVariant.titleFive}>9999</Text>
              <Text variant={TextVariant.strikedThrough}>12000</Text>
            </div>
            <div className="price">
              <img
                src={require("../../../assets/icons/offer.svg")}
                alt="Rupee Symbol"
              />
              <Text variant={TextVariant.offer}>16% off</Text>
            </div>
          </div>
        </div>
        <div className="enrollment-details">
          <Text className="cta" variant={TextVariant.titleFour}>
            LEARN MORE
          </Text>
        </div>
      </div>
    </div>
  );
}

export default CourseCardSecondary;
