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
`;

const Title = styled.h1`
  font-size: 9rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3.81rem;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  width: 125%;
  font-size: 2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px 20px;
  }
`;

function HeroSectionComponent() {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Title>Discover Your Perfect Website</Title>
          <Paragraph>
            Find the ideal website template for your project with Website Bank.
            Our carefully curated selection offers templates for every need,
            from sleek business sites to captivating portfolios and vibrant
            e-commerce stores. Stand out from the crowd and impress your
            visitors with our professionally designed and fully customizable
            templates. Get started today and unlock the potential of your online
            presence!
          </Paragraph>
          <CTAButton href="#templates">Explore Templates</CTAButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}

export default HeroSectionComponent;
