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
  box-shadow: 0 0 15px rgba(0, 0, 255, 0.5), 0 0 25px rgba(0, 0, 255, 0.3); /* Added box-shadow */
  border: 4px solid rgba(0, 0, 255, 0.1); /* Added border */
`;

const LargeCircle = styled(Circle)`
  width: 200px;
  height: 200px;
  top: 100px;
  right: 200px;
  background-image: url("https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/11/attachment_88813488-e1572534840369.png?auto=format&q=60&fit=max&w=930");
  background-size: cover;
`;

const MediumCircle = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 250px;
  right: 1000px;
  background-image: url("https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg");
  background-size: cover;
`;

const SmallCircle = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 400px;
  right: 0;
  background-image: url("https://th.bing.com/th?id=OIP.rQbae0nnUWmyB6EMUQxfuAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2");
  background-size: cover;
`;

const SmallestCircle = styled(Circle)`
  width: 100px;
  height: 100px;
  top: 500px;
  right: 1500px;
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/349f2e68871707.5b6c370540d19.png");
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
