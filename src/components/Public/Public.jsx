import React from "react";
import { Container } from "react-bootstrap";
import {
  Hero,
  SrOnly,
  HeroContent,
  Subtitle,
  Text,
  Features,
  FeatureItem,
  FeatureIcon,
  FeatureItemTitle,
} from "./index.styles";
import { home_data } from "../../mock/data";

/**
 * Content for the Home Page
 * @function ContentHome
 * @param {any}
 * @returns {JSX}
 */

const Public = () => {
  const content = (
    <Container>
      <Hero>
        <HeroContent>
          <SrOnly>Promoted Content</SrOnly>
          <Subtitle>No fees.</Subtitle>
          <Subtitle>No minimum deposit.</Subtitle>
          <Subtitle>High interest rates.</Subtitle>
          <Text>Open a savings account with Argent Bank today!</Text>
        </HeroContent>
      </Hero>
      <Features>
        <SrOnly>Features</SrOnly>
        {home_data.map((icon) => {
          return (
            <FeatureItem key={icon.type}>
              <FeatureIcon src={icon.img} alt={icon.type} />
              <FeatureItemTitle>{icon.title}</FeatureItemTitle>
              <p>{icon.text}</p>
            </FeatureItem>
          );
        })}
      </Features>
    </Container>
  );
  return content;
};
export default Public;
