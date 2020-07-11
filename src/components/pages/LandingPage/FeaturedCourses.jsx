import React from "react";
import { Text, Chip } from "../../atoms";
import { TextVariant, TextType } from "../../atoms/Text";
import { ChipVariant } from "../../atoms/Chip";
import { CourseCard } from "../../organisms";
import { featuredCourses } from "./dummyData";

function FeaturedCourses() {
  const renderCourses = () => {
    return featuredCourses.map((course) => (
      <CourseCard key={course.title} {...course} />
    ));
  };

  return (
    <div className="featured-courses">
      <div className="title">
        <Text variant={TextVariant.headingTwo}>
          Upcoming Online Courses
          <Chip variant={ChipVariant.highlightOne}> &bull; Live</Chip>
        </Text>
        <Text variant={TextVariant.subHadingOne}>
          Learn from live teachers, not pre-recorded videos, in our intelligent
          virtual classrooms.
        </Text>
        <Text variant={TextVariant.subHadingOne} type={TextType.span}>
          <img
            className="badge"
            src={require("../../../assets/icons/skill.svg")}
            alt="Skill Badge"
          />
          = 21st century skills you’ll unlock
        </Text>
        <Text
          variant={TextVariant.subHadingOne}
          type={TextType.span}
          className="coin-badge"
        >
          <img
            className="badge"
            src={require("../../../assets/icons/coin.svg")}
            alt="Coin Badge"
          />
          = coins you’ll earn for completion
        </Text>
      </div>
      <div className="courses">{renderCourses()}</div>
    </div>
  );
}

export default FeaturedCourses;
