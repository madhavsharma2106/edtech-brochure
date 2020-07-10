import React from "react";
import "./index.scss";
import Text, { TextVariant } from "../../atoms/Text";

function CatalogueCard({ title, altText, image }) {
  return (
    <div className="catalogue-card">
      <img src={image} alt={altText} />
      <Text variant={TextVariant.titleOne}>{title}</Text>
    </div>
  );
}

export default CatalogueCard;
