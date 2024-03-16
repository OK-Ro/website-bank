import React from "react";
import styled, { keyframes } from "styled-components";
import HeroSectionComponent from "./HeroSection";

const Container = styled.div`
  background: linear-gradient(to right, #f5f5f5, #c0adada5);
  padding: 100px 80px;
  margin: 3rem;
  border-radius: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px 5px;
    margin: 1rem;
  }
`;

const LeftSection = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
    height: 50vh;
  }
`;

const RightSection = styled.div`
  width: 55%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 60vh;
  background-color: transparent;
  top: 38rem;
  margin-left: 15rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 50vh;
    top: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const PulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const HeartbeatAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.87),
    inset 5px 5px 60px rgba(0, 0, 0, 0.555),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    border: 2px solid white;
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.4),
      inset 5px 5px 60px rgba(0, 0, 0, 0.555),
      inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  }
`;

const LargeCircle = styled(Circle)`
  width: 230px;
  height: 230px;
  top: 100px;
  right: 200px;
  background-image: url("https://static.wixstatic.com/media/bb1bd6_e70f4c7201f94a258d92cbda381ddfb1~mv2.gif");
  background-size: cover;
  animation: ${PulsateAnimation} 3s infinite alternate;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: -29rem;
    right: auto;
    left: 70%;
    transform: translateX(-50%);
  }
`;

const MediumCircle = styled(Circle)`
  width: 180px;
  height: 180px;
  top: 250px;
  right: 900px;
  background-image: url("https://cdn.dribbble.com/users/1856812/screenshots/4020514/webpage.gif");
  background-size: cover;
  animation: ${PulsateAnimation} 4s infinite alternate;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    top: -16.8rem;
    right: auto;
    left: 30%;
    transform: translateX(-50%);
  }
`;

const SmallCircle = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 400px;
  right: 0;
  background-image: url("https://cdn.dribbble.com/users/278201/screenshots/3861829/gif.gif");
  background-size: cover;
  animation: ${PulsateAnimation} 5s infinite alternate;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: 5rem;
    right: auto;
    left: 3%;
    transform: translateX(-50%);
  }
`;

const SmallestCircle = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 500px;
  right: 1200px;
  background-image: url("https://www.bing.com/th/id/OGC.77a9c3545a7e1016d73876cabfa4e314?pid=1.7&rurl=https%3a%2f%2ffiverr-res.cloudinary.com%2fattachments%2fgeneric_asset%2fasset%2fe28bed16bca1eef244ddb4c98572fb20-1596709168025%2fgif.gif&ehk=yFkI3d59zWOrmbeEscgeW7hPk2xFi92uT32E47R1rUI%3d");
  background-size: cover;
  animation: ${PulsateAnimation} 6s infinite alternate;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: -5rem;
    right: auto;
    left: 80%;
    transform: translateX(-50%);
  }
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
