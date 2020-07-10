import React from "react";
import { Text } from "../../atoms";
import { TextVariant } from "../../atoms/Text";
import { CatalogueCard, Slider } from "../../molecules";
import { courseCatalogue } from "./dummyData";

function CourseCatalogue() {
  const renderCourses = () => {
    const courses = courseCatalogue.map(({ title, altText, image }) => (
      <CatalogueCard
        className="course"
        key={title}
        title={title}
        altText={altText}
        image={image}
      />
    ));

    return <Slider>{courses}</Slider>;
  };

  return (
    <div className="course-catalogue">
      <Text className="heading" variant={TextVariant.headingTwo}>
        What do you want to learn?
      </Text>
      <div className="catalogues">{renderCourses()}</div>
    </div>
  );
}

export default CourseCatalogue;
