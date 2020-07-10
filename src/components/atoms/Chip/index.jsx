import React from "react";
import classnames from "classnames";
import "./index.scss";

export const ChipVariant = {
  highlightOne: "highlight-one",
  highlightTwo: "highlight-two",
  highlightThree: "highlight-three",
  highlightFour: "highlight-four",
};

function Chip(props) {
  const { variant, children, className } = props;
  const classes = classnames([variant && `chip-${variant}`, className, "chip"]);

  return (
    <span {...props} className={classes}>
      {children}
    </span>
  );
}

export default Chip;
