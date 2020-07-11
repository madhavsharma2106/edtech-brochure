import React from "react";
import "./index.scss";
import { Menu } from "../../organisms";
import HeroContainer from "./HeroContainer";
import CoursesContainer from "./CoursesContainer";

function CoursesPage() {
  return (
    <div className="courses-page">
      <div className="background">
        <div className="container">
          <Menu />
          <HeroContainer />
        </div>
      </div>
      <div className="container">
        <CoursesContainer />
      </div>
    </div>
  );
}

export default CoursesPage;
