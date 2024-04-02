import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Yanone Kaffeesatz", sans-serif;
  padding: 20px;
`;

const Card = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const PricingSection = () => {
  // Define array of information for different cards
  const cardData = [
    {
      title: "Basic",
      price: "$24.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL: "https://via.placeholder.com/500x300",
    },
    {
      title: "Standard",
      price: "$49.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL: "https://via.placeholder.com/500x300",
    },
    {
      title: "Premium",
      price: "$99.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL: "https://via.placeholder.com/500x300",
    },
  ];

  // Function to handle card selection
  const handleSelectPlan = (plan) => {
    console.log(`Selected plan: ${plan}`);
    // Add your logic here to handle plan selection, such as redirecting to a checkout page
  };

  return (
    <Wrapper>
      {cardData.map((card, index) => (
        <Card key={index}>
          <Header>
            <Image src={card.imageURL} alt="Template" />
          </Header>
          <Content>
            <Title>{card.title}</Title>
            <Price>{card.price}</Price>
            <Description>{card.description}</Description>
            <Button onClick={() => handleSelectPlan(card.title)}>
              Choose Plan
            </Button>
          </Content>
        </Card>
      ))}
    </Wrapper>
  );
};

export default PricingSection;
