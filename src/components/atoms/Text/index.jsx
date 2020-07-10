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
  headingText: "heading-text",
  subHadingOne: "sub-heading-one",
  highlightOne: "highlight-one",
  subTextOne: "sub-text-one",
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
