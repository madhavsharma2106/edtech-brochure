import React, { useState } from "react";
import "./index.scss";
import { Text, Select } from "../../atoms";
import { TextVariant, TextType } from "../../atoms/Text";
import { CourseCardSecondary } from "../../organisms";

function CoursesContainer() {
  const [grade, setGrade] = useState("5-8");

  const renderCourseCards = () => {
    let coursesCards = [];
    for (let i = 0; i < 6; i++) {
      coursesCards.push(<CourseCardSecondary />);
    }
    return coursesCards;
  };

  return (
    <div className="courses-container">
      <div className="grade-router">
        <div
          onClick={() => setGrade("1-4")}
          className={`grade ${grade === "1-4" ? "active" : ""}`}
        >
          <div>
            <Text variant={TextVariant.routeTitle}>Grades 1-4</Text>
          </div>
        </div>

        <div
          onClick={() => setGrade("5-8")}
          className={`grade ${grade === "5-8" ? "active" : ""}`}
        >
          <div>
            <Text variant={TextVariant.routeTitle}>Grades 5-8</Text>
          </div>
        </div>

        <div
          onClick={() => setGrade("9-12")}
          className={`grade ${grade === "9-12" ? "active" : ""}`}
        >
          <div>
            <Text variant={TextVariant.routeTitle}>Grades 9-12</Text>
          </div>
        </div>
      </div>
      <div className="filter">
        <Text variant={TextVariant.subTextThree}>
          Showing <Text type={TextType.span}>All</Text> courses for{" "}
          <Text type={TextType.span}>Grades {grade} </Text>
        </Text>
        <Select
          options={["All Courses", "Machine Learning", "AI", "Web Development"]}
        />
      </div>
      <div className="course-cards">{renderCourseCards()}</div>
    </div>
  );
}

export default CoursesContainer;
