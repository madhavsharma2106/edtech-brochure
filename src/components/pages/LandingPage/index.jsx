import React from "react";
import "./index.scss";
import { MenuLoggedIn } from "../../organisms";
import HeroContainer from "./HeroContainer";
import CourseCatalogue from "./CourseCatalogue";
import FeaturedCourses from "./FeaturedCourses";
import Footer from "../../organisms/Footer";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container">
        <MenuLoggedIn />
        <HeroContainer />
        <CourseCatalogue />
        <FeaturedCourses />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
