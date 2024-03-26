import React from "react";
import styled from "styled-components";

// Styled components for the main container and tiles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2.5rem;
  color: #4a5568;
  background-color: #f7fafc;

  @media (min-width: 768px) {
    padding: 5rem;
  }
`;

const TileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 4xl;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;

const Tile = styled.div`
  flex: 1;
  margin-top: 2rem;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin-top: 3rem;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const TileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  background-color: #cbd5e0;
`;

const TileTitle = styled.span`
  font-weight: 600;
`;

const TilePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 3xl;

  span {
    font-size: 5xl;
    font-weight: bold;
    color: #4a5568;
  }

  p {
    font-size: 2xl;
    color: #718096;
    margin-left: 0.5rem;
  }
`;

const TileBody = styled.div`
  padding: 2.5rem;
`;

const FeaturesList = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    fill: #38a169;
  }
`;

const JoinButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4rem;
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  color: #4a5568;
  background-color: #cbd5e0;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a0aec0;
  }
`;

// Component
const PricingSection = () => {
  return (
    <MainContainer>
      <h2 className="text-2xl font-medium">Jedi Order Membership</h2>

      <TileContainer>
        {/* Tile 1 */}
        <Tile>
          <TileHeader>
            <TileTitle>Padawan</TileTitle>
            <TilePrice>
              <span>$</span>
              <span>20</span>
              <p>/mo</p>
            </TilePrice>
          </TileHeader>
          <TileBody>
            <FeaturesList>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Lightsaber</span>
              </li>
              {/* Add more list items */}
            </FeaturesList>
            <JoinButton>Join now</JoinButton>
          </TileBody>
        </Tile>

        {/* Tile 2 */}
        <Tile>
          <TileHeader>
            <TileTitle>Jedi Knight</TileTitle>
            <TilePrice>
              <span>$</span>
              <span>50</span>
              <p>/mo</p>
            </TilePrice>
          </TileHeader>
          <TileBody>
            <FeaturesList>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Padawan +</span>
              </li>
              {/* Add more list items */}
            </FeaturesList>
            <JoinButton>Join now</JoinButton>
          </TileBody>
        </Tile>

        {/* Tile 3 */}
        <Tile>
          <TileHeader>
            <TileTitle>Jedi Master</TileTitle>
            <TilePrice>
              <span>$</span>
              <span>99</span>
              <p>/mo</p>
            </TilePrice>
          </TileHeader>
          <TileBody>
            <FeaturesList>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Jedi Knight +</span>
              </li>
              {/* Add more list items */}
            </FeaturesList>
            <JoinButton>Join now</JoinButton>
          </TileBody>
        </Tile>

        {/* Add more tiles */}
      </TileContainer>
    </MainContainer>
  );
};

export default PricingSection;
