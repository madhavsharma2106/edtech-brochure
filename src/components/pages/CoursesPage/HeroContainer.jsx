import React from "react";
import { Text } from "../../atoms";
import { TextVariant } from "../../atoms/Text";
import "./index.scss";
import PromoCard from "../../organisms/PromoCard";
import { promoCards } from "./dummyData";
import Button, { ButtonVariant } from "../../atoms/Button";

function HeroContainer() {
  const renderPromoCards = () => {
    return promoCards.map((promo) => (
      <PromoCard key={promo.title} {...promo} />
    ));
  };

  return (
    <div className="hero-container">
      <Text variant={TextVariant.pageTitle}>ONLINE COURSES</Text>
      <div className="promo-cards">{renderPromoCards()}</div>
      <Button variant={ButtonVariant.CTAOne}>Book a free trial.</Button>
    </div>
  );
}

export default HeroContainer;
