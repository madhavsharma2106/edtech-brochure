import React from "react";
import "./index.scss";
import classnames from "classnames";

export const ButtonVariant = {
  primaryOne: "primary-one",
  CTAOne: "cta-one",
};

function Button(props) {
  const { className, variant, children } = props;
  const classes = classnames([
    variant && `button-${variant}`,
    className,
    "button",
  ]);

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}

export default Button;
