import React from "react";
import "./index.scss";
import classnames from "classnames";

export const TextVariant = {
  headingOne: "heading-one",
  headingTwo: "heading-two",
  titleOne: "title-one",
  titleTwo: "title-two",
  titleThree: "title-three",
  titleFour: "title-four",
  titleFive: "title-five",
  headingText: "heading-text",
  subHadingOne: "sub-heading-one",
  subHeadingTwo: "sub-heading-two",
  highlightOne: "highlight-one",
  subTextOne: "sub-text-one",
  subTextTwo: "sub-text-two",
  subTextThree: "sub-text-three",
  menuText: "menu-text",
  pageTitle: "page-title",
  routeTitle: "route-title",
  strikedThrough: "striked-through",
  offer: "offer",
};

export const TextType = {
  span: "span",
};

function Text(props) {
  const { className, variant, children, type } = props;
  const classes = classnames([variant && `text-${variant}`, className]);

  if (type === TextType.span)
    return (
      <span {...props} className={classes}>
        {children}
      </span>
    );
  return (
    <p {...props} className={classes}>
      {children}
    </p>
  );
}

export default Text;
