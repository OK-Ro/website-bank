import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Yanone Kaffeesatz", sans-serif;
  height: 40vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

  @media (max-width: 768px) {
    margin: 20px 0;
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
`;

const Header = styled.div`
  height: 120px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;

  img {
    width: 100%;
    transition: all 0.3s ease-in-out;
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
  border-radius: 5px;
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
      <Container>
        {cardData.map((card, index) => (
          <Card key={index}>
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
        ))}
      </Container>
    </Wrapper>
  );
};

export default PricingSection;
