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

  position: relative; /* Added */
`;

const ImageContainer = styled.div`
  position: relative;
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

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.5);
`;

const LargeCircle = styled(Circle)`
  width: 200px;
  height: 200px;
  top: 100px; /* Adjusted */
  right: 200px; /* Adjusted */
`;

const MediumCircle = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 250px; /* Adjusted */
  right: 1000px; /* Adjusted */
`;

const SmallCircle = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 400px; /* Adjusted */
  right: 0; /* Adjusted */
`;

const SmallestCircle = styled(Circle)`
  width: 70px;
  height: 70px;
  top: 500px; /* Adjusted */
  right: 1500px; /* Adjusted */
`;

function HomeSection() {
  return (
    <Container>
      <LeftSection>
        <HeroSectionComponent />
      </LeftSection>
      <RightSection>
        <LargeCircle />
        <MediumCircle />
        <SmallCircle />
        <SmallestCircle />
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
