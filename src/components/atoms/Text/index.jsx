import React from "react";
import "./index.scss";
import classnames from "classnames";

export const TextVariant = {
  headingOne: "heading-one",
  headingText: "heading-text",
};

export const TextType = {
  span: "span",
};

function Text(props) {
  const { className, variant, children, type } = props;
  const classes = classnames([variant && `text-${variant}`, className]);

  if (type === TextType.span)
    return (
      <span className={classes} {...props}>
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
