import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  background-color: #fff;
  padding: 80px 0;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutHeading = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
`;

const AboutSectionComponent = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutHeading>About Us</AboutHeading>
        <AboutContent>
          Website Bank is your one-stop destination for high-quality website
          templates. Whether you're a business owner looking to establish an
          online presence, a freelancer showcasing your portfolio, or an
          entrepreneur starting an e-commerce venture, we have the perfect
          template for you. Our templates are professionally designed, fully
          customizable, and optimized for performance. With Website Bank,
          creating your dream website has never been easier.
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutSection;
