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
  position: relative;
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
  box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.87),
    inset 5px 5px 10px rgba(0, 0, 0, 0.61),
    inset 5px 5px 20px rgba(0, 0, 0, 0.555),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
`;

const LargeCircle = styled(Circle)`
  width: 200px;
  height: 200px;
  top: 100px;
  right: 200px;
  background-image: url("https://www.bing.com/th/id/OGC.77a9c3545a7e1016d73876cabfa4e314?pid=1.7&rurl=https%3a%2f%2ffiverr-res.cloudinary.com%2fattachments%2fgeneric_asset%2fasset%2fe28bed16bca1eef244ddb4c98572fb20-1596709168025%2fgif.gif&ehk=yFkI3d59zWOrmbeEscgeW7hPk2xFi92uT32E47R1rUI%3d");
  background-size: cover;
`;

const MediumCircle = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 250px;
  right: 1000px;
  background-image: url("https://cdn.dribbble.com/users/1856812/screenshots/4020514/webpage.gif");
  background-size: cover;
`;

const SmallCircle = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 400px;
  right: 0;
  background-image: url("https://cdn.dribbble.com/users/278201/screenshots/3861829/gif.gif");
  background-size: cover;
`;

const SmallestCircle = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 500px;
  right: 1500px;
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/be510767817393.5b472244e895f.gif");
  background-size: cover;
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
