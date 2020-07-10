import React from "react";
import { Text, Chip } from "../../atoms";
import { TextVariant, TextType } from "../../atoms/Text";
import "./index.scss";
import { ChipVariant } from "../../atoms/Chip";

function CourseCard(props) {
  const {
    tag,
    title,
    grades,
    preReq,
    skills,
    coins,
    startDate,
    weekdays,
    timings,
    price,
  } = props;
  return (
    <div className="course-card">
      <div className="course-creative">
        <img
          className="creative"
          src={require("../../../assets/images/course-creative.jpg")}
          alt="A young man enjoying a Virtual Reality experience"
        />
        <Chip variant={ChipVariant.highlightTwo} className="tag">
          {tag}
        </Chip>
      </div>

      <div className="info">
        <Text variant={TextVariant.titleTwo} className="horizontal-line">
          {title}
        </Text>
        <div className="grade-info horizontal-line">
          <div className="grade">
            <div className="section">
              <img
                src={require("../../../assets/icons/paper-stack.svg")}
                alt="Paper Stack"
              />
              <Text variant={TextVariant.titleThree}>GRADES</Text>
            </div>
            <Text className="req" variant={TextVariant.titleTwo}>
              {grades}
            </Text>
          </div>
          <div className="grade">
            <div className="section">
              <img
                src={require("../../../assets/icons/checkbox.svg")}
                alt="Paper Stack"
              />
              <Text variant={TextVariant.titleThree}>PRE-REQ</Text>
            </div>
            <Text className="req" variant={TextVariant.titleTwo}>
              {preReq}
            </Text>
          </div>
        </div>
        <div className="badges-offered horizontal-line">
          <div className="offer">
            <img
              src={require("../../../assets/icons/skill.svg")}
              alt="Skill Badge"
              className="badge"
            />
            {skills.map((skill) => (
              <Chip variant={ChipVariant.highlightThree}>{skill}</Chip>
            ))}
          </div>
          <div className="offer">
            <img
              src={require("../../../assets/icons/coin.svg")}
              alt="Skill Badge"
              className="badge"
            />
            <Chip variant={ChipVariant.highlightFour}>{coins}</Chip>
          </div>
        </div>
        <div className="event-details horizontal-line">
          <div className="detail">
            <img
              src={require("../../../assets/icons/calendar.svg")}
              alt="Calendear"
              className="icon"
            />
            <Text type={TextType.span} variant={TextVariant.subTextOne}>
              {startDate}
            </Text>
          </div>
          <div className="detail">
            <img
              src={require("../../../assets/icons/hour-glass.svg")}
              alt="Calendear"
              className="icon"
            />
            <Text type={TextType.span} variant={TextVariant.subTextOne}>
              {weekdays}
            </Text>
          </div>
          <div className="detail">
            <img
              src={require("../../../assets/icons/clock.svg")}
              alt="Calendear"
              className="icon"
            />
            <Text type={TextType.span} variant={TextVariant.subTextOne}>
              {timings}
            </Text>
          </div>
        </div>
        <div className="enrollment-details">
          <Text variant={TextVariant.titleFour}>{price}</Text>
          <Text className="cta" variant={TextVariant.titleFour}>
            Enroll
          </Text>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
