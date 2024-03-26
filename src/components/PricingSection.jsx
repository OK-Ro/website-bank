import React from "react";
import styled from "styled-components";

const PricingSection = styled.section`
  background-color: #f9f9f9;
  padding: 80px 0;
`;

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PricingHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
  text-align: center;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const PricingCard = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const PricingTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #007bff;
  text-align: center;
`;

const PricingDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #666;
`;

const PricingPrice = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const PricingButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Pricing = () => {
  return (
    <PricingSection>
      <PricingContainer>
        <PricingHeading>Pricing Packages</PricingHeading>
        <PricingGrid>
          <PricingCard>
            <PricingTitle>Starter Plan</PricingTitle>
            <PricingDescription>
              Perfect for small businesses and startups.
            </PricingDescription>
            <PricingPrice>$39 / month</PricingPrice>
            <PricingButton>Get Now</PricingButton>
          </PricingCard>
          <PricingCard>
            <PricingTitle>Pro Plan</PricingTitle>
            <PricingDescription>
              Ideal for growing businesses with more features.
            </PricingDescription>
            <PricingPrice>$59 / month</PricingPrice>
            <PricingButton>Get Now</PricingButton>
          </PricingCard>
        </PricingGrid>
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing;
