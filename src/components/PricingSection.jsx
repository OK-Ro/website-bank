import React from "react";
import styled from "styled-components";

const CustomPricingSection = styled.section`
  background-color: #f9f9f9;
  padding: 80px 0;
`;

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const PricingHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
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
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const PricingTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
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
  color: #007bff;
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

const CustomPricingSection = () => {
  return (
    <CustomPricingSection>
      <PricingContainer>
        <PricingHeading>Pricing Packages</PricingHeading>
        <PricingGrid>
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
        </PricingGrid>
      </PricingContainer>
    </CustomPricingSection>
  );
};

export default CustomPricingSection;
