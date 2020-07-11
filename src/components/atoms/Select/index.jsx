import React from "react";
import "./index.scss";

function Select({ options }) {
  const renderOptions = () => {
    return options.map((option, i) => (
      <option key={i} value={option}>
        {option}
      </option>
    ));
  };
  return <select>{renderOptions()}</select>;
}

export default Select;
