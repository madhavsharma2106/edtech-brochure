import React from "react";
import { Text } from "../../atoms";
import { TextVariant, TextType } from "../../atoms/Text";

function LandingPage() {
  return (
    <div className="container">
      Landing Page
      <Text>asdfasd</Text>
      <Text type={TextType.span} variant={TextVariant.headingOne}>
        Welcome to the school of the future.
      </Text>
    </div>
  );
}

export default LandingPage;
