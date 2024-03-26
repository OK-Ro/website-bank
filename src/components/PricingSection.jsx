import React from "react";
import styled from "styled-components";

const PricingSection = styled.section`
  background-color: #f9f9f9;
  padding: 80px 0;
`;

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const PricingCard = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  flex: 1;
  max-width: 300px;
  margin: 0 20px;
  &:hover {
    transform: translateY(-10px);
  }
`;

const PricingTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const PricingPrice = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PricingDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
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
        <PricingCard>
          <PricingTitle>Basic</PricingTitle>
          <PricingDescription>
            Perfect for small businesses and startups.
          </PricingDescription>
          <PricingPrice>$9.99 / month</PricingPrice>
          <PricingButton>Select Plan</PricingButton>
        </PricingCard>
        <PricingCard>
          <PricingTitle>Standard</PricingTitle>
          <PricingDescription>
            Ideal for growing businesses with more features.
          </PricingDescription>
          <PricingPrice>$19.99 / month</PricingPrice>
          <PricingButton>Select Plan</PricingButton>
        </PricingCard>
        <PricingCard>
          <PricingTitle>Premium</PricingTitle>
          <PricingDescription>
            Advanced features for established businesses.
          </PricingDescription>
          <PricingPrice>$29.99 / month</PricingPrice>
          <PricingButton>Select Plan</PricingButton>
        </PricingCard>
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing;
