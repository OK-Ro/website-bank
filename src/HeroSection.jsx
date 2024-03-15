import React from "react";
import styled from "styled-components";

const HeroSection = styled.section``;

const Container = styled.div`
  margin: 3rem;
  border-radius: 2rem;

  @media (max-width: 768px) {
    padding: 200px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  width: 80%;
  margin-left: 3rem;

  @media (max-width: 768px) {
    width: 90%; /* Example of modifying existing media query */
  }

  @media (max-width: 480px) {
    margin-left: 1rem; /* Example of modifying existing media query */
  }
`;

const Title = styled.h1`
  font-size: 10rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  width: 125%;

  @media (max-width: 768px) {
    font-size: 3.81rem;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

// Other styled components remain unchanged

function HeroSectionComponent() {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Title>Discover Your Perfect Website</Title>
          {/* Other components */}
        </HeroContent>
      </Container>
    </HeroSection>
  );
}

export default HeroSectionComponent;
