import React from "react";
import { Text } from "../../atoms";
import { TextVariant, TextType } from "../../atoms/Text";
import "./index.scss";

function PromoCard({ title, altText, image, cta, summary }) {
  return (
    <div className="promo-card">
      <img src={image} alt={altText} />
      <Text variant={TextVariant.subHeadingTwo}>{title}</Text>
      <Text variant={TextVariant.subTextTwo}>
        {summary} &nbsp;
        <Text
          variant={TextVariant.subTextTwo}
          type={TextType.span}
          className="cta"
        >
          {cta}
        </Text>
      </Text>
    </div>
  );
}

export default PromoCard;
