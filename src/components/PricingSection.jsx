import React from "react";
import styled from "styled-components";

// Styled components for the main container, card, and buttons
const Body = styled.body`
  font-family: "Montserrat", sans-serif;
  background-color: #f7fafc;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  padding: 2rem;
  border-radius: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 32rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.color || "#000"};
`;

const Price = styled.p`
  font-size: 3rem;
  font-weight: 600;
`;

const Feature = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.color || "#000"};
`;

const Button = styled.a`
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #4299e1;
  color: #fff;
  text-decoration: none;
  text-align: center;
  border-radius: 1rem;
  margin-top: 2rem;
`;

// Component
const PricingPlans = () => {
  return (
    <Body>
      <MainContainer>
        <div>
          <div className="text-center font-semibold">
            <Title color="#1a202c">
              <span className="text-blue-700 tracking-wide">Flexible </span>
              <span>Plans</span>
            </Title>
            <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
              Choose a plan that works best for you and your team.
            </p>
          </div>
          <div className="pt-24 flex flex-row">
            {/* Basic Card */}
            <Card>
              <Title color="#000">Basic</Title>
              <Price>
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">10</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </Price>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <Feature color="#718096">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Get started with{" "}
                    <span className="text-black">messaging</span>
                  </span>
                </Feature>
                <Feature color="#718096">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Flexible <span className="text-black">team meetings</span>
                  </span>
                </Feature>
                <Feature color="#718096">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-black">5 TB</span> cloud storage
                  </span>
                </Feature>
                <Button href="#">
                  <span className="font-medium">Choose Plan</span>
                  <span className="pl-2 material-icons align-middle text-sm">
                    east
                  </span>
                </Button>
              </div>
            </Card>

            {/* Startup Card */}
            <Card>
              <Title color="#fff">Startup</Title>
              <Price>
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">24</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </Price>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <Feature color="#fff">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    All features in <span className="text-white">Basic</span>
                  </span>
                </Feature>
                <Feature color="#fff">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Flexible <span className="text-white">call scheduling</span>
                  </span>
                </Feature>
                <Feature color="#fff">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-white">15 TB</span> cloud storage
                  </span>
                </Feature>
                <Button href="#">
                  <span className="font-medium">Choose Plan</span>
                  <span className="pl-2 material-icons align-middle text-sm">
                    east
                  </span>
                </Button>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                  Popular
                </p>
              </div>
            </Card>

            {/* Enterprise Card */}
            <Card>
              <Title color="#000">Enterprise</Title>
              <Price>
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">35</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </Price>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <Feature color="#718096">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    All features in <span className="text-black">Startup</span>
                  </span>
                </Feature>
                <Feature color="#718096">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Growth <span className="text-black">oriented</span>
                  </span>
                </Feature>
                <Feature color="#718096">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-black">Unlimited</span> cloud storage
                  </span>
                </Feature>
                <Button href="#">
                  <span className="font-medium">Choose Plan</span>
                  <span className="pl-2 material-icons align-middle text-sm">
                    east
                  </span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </MainContainer>
    </Body>
  );
};

export default PricingPlans;
