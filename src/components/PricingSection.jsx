import React from "react";
import styled from "styled-components";
import ScrollEffectContainer from "../ScrollEffectContainer";

const Wrapper = styled.div`
  font-family: "Yanone Kaffeesatz", sans-serif;
  height: 40vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
`;

const Card = styled.div`
  margin: 0 20px;
  width: 280px;
  text-align: center;
  position: relative;
  cursor: pointer;
  opacity: 0.8;
  border-radius: 14px;
  box-shadow: 0px 17px 46px -10px #777777;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0;
    width: calc(100% - 40px); /* Full width with margin */
  }
`;

const CardInner = styled.div`
  width: 70px;
  background: #f1f0ed;
  height: 70px;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensure the image stays within the container */

  img {
    width: 100%;
    height: 100%; /* Ensure the image takes up the entire space of the container */
    object-fit: cover; /* Ensure the image covers the entire space of the container */
  }
`;

const Header = styled.div`
  height: 120px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto; /* Ensure the image maintains its aspect ratio */
    transition: all 0.3s ease-in-out;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 20px;

  .price {
    font-weight: 800;
    font-size: 36px;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
  }

  .text {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    margin-top: 20px;
    font-size: 14px;
    line-height: 20px;
  }

  .title {
    font-weight: 800;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.64);
    margin-top: 40px;
    font-size: 18px;
    letter-spacing: 1px;
  }
`;

const Cta = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const PricingSection = () => {
  const cardData = [
    {
      title: "Basic",
      price: "$24.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL:
        "https://www.bing.com/th?id=OIP.3l2nfzcHhMemSZooiH3B3AHaFj&w=135&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      title: "Standard",
      price: "$49.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL: "https://media.giphy.com/media/jqxIH2SPurkOHbaKfQ/giphy.gif",
    },
    {
      title: "Premium",
      price: "$99.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL: "https://dailytaxanalysis.com/assets/img/online-pay.gif",
    },
  ];

  // Function to handle card selection
  const handleSelectPlan = (plan) => {
    console.log(`Selected plan: ${plan}`);
    // logic here to handle plan
  };
  return (
    <Wrapper>
      <Container>
        {cardData.map((card, index) => (
          <ScrollEffectContainer key={index}>
            <Card>
              <CardInner>
                <img src={card.imageURL} alt="Template" />
              </CardInner>
              <Header>
                <img src={card.imageURL} alt="Template Header" />
              </Header>
              <Content>
                <div className="price">{card.price}</div>
                <div className="text">{card.description}</div>
                <div className="title">{card.title}</div>
              </Content>
              <Cta>
                <Button onClick={() => handleSelectPlan(card.title)}>
                  Choose Plan
                </Button>
              </Cta>
            </Card>
          </ScrollEffectContainer>
        ))}
      </Container>
    </Wrapper>
  );
};

export default PricingSection;
