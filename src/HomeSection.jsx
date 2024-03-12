import React from "react";
import styled from "styled-components";
import HeroSectionComponent from "./HeroSection";

const Container = styled.div`
  background-color: #f8f9fa;
  padding: 150px 0;
  margin: 3rem;
  border-radius: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 4px solid #1abc9c;
  display: flex;
`;

const LeftSection = styled.div`
  width: 40%;
`;

const RightSection = styled.div`
  width: 55%;
  background: red;
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 60vh;
  background-color: transparent;
  margin-top: 20rem;
  margin-left: 15rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function HomeSection() {
  return (
    <Container>
      <LeftSection>
        <HeroSectionComponent />
      </LeftSection>
      <RightSection>
        <ImageContainer>
          <Image
            src="https://www.pngplay.com/wp-content/uploads/9/WWW-Website-Transparent-Background.png"
            alt="Your Image"
          />
        </ImageContainer>
      </RightSection>
    </Container>
  );
}

export default HomeSection;
