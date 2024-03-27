import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  font-family: "Yanone Kaffeesatz", sans-serif;
  height: 40vh;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px; /* Adjust the max-width as needed */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Card = styled.div`
  width: 300px; /* Adjust the width of each card */
  height: 500px; /* Adjust the height of each card */
  text-align: center;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  opacity: 0.5;
  box-shadow: 0px 17px 46px -10px #777777;
  border-radius: 14px;
  animation: ${({ animate }) => animate && cardIntroAnimation} 1s forwards;

  &:hover {
    opacity: 1;
  }
`;

const cardIntroAnimation = css`
  @keyframes cardIntroAnimation {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(1.06);
    }
    50% {
      transform: scale(0.965);
    }
    75% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const CardInner = styled.div`
  position: absolute;
  width: 70px;
  background: #f1f0ed;
  height: 70px;
  border-radius: 100px;
  left: 0;
  right: 0;
  margin: auto;
  border: 4px solid #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 17px;
    transition: all 0.2s;
  }
`;

const Header = styled.div`
  height: 120px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.1s linear;
  }
`;

const Content = styled.div`
  padding: 20px;
  .price {
    font-weight: 800;
    font-size: 70px;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
  }
  .text {
    font-weight: 100;
    margin-top: 20px;
    font-size: 13px;
    line-height: 16px;
  }
  .title {
    font-weight: 800;
    text-transform: uppercase;

    margin-top: 40px;
    font-size: 25px;
    letter-spacing: 1px;
  }
`;

const Cta = styled.div`
  position: absolute;
  bottom: -24px;
  left: 0;
  right: 0;
  margin: auto;
  width: 200px;

  button {
    padding: 16px;
    width: 100%;
    background: linear-gradient(-90deg, #fe5e7d 0%, #e5375b 100%);
    border: none;
    font-family: "Yanone Kaffeesatz", sans-serif;
    color: white;
    outline: none;
    font-size: 20px;
    border-radius: 6px;
    transform: scale(0.94);
    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.3s 0.1s;

    span {
      text-shadow: 0px 4px 18px #ba3f57;
    }

    &:hover {
      box-shadow: 0px 0px 60px 8px #f76583,
        0px 0px 0px 2px rgba(255, 255, 255, 0.19) inset;
    }
  }
`;

const PricingSection = () => {
  // Define array of information for different cards
  const cardData = [
    {
      title: "Basic",
      price: "$24.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL:
        "https://www.photoshopvideotutorial.com/freepsdmock/wp-content/uploads/2020/01/Free-3d-Website-Mockup-Presentation-scaled.jpg",
      imageHeaderURL: "https://cdn-icons-png.flaticon.com/512/9545/9545135.png",
    },
    {
      title: "Standard",
      price: "$49.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL:
        "https://design4users.com/wp-content/uploads/2021/04/3d-graphics-website-1536x1152.jpg",
      imageHeaderURL: "https://cdn-icons-png.flaticon.com/512/9464/9464073.png",
    },
    {
      title: "Premium",
      price: "$99.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageURL:
        "https://d3ui957tjb5bqd.cloudfront.net/uploads/images/0f/9f/0f9fbb1c-6a1e-4a39-b0a1-084a978f2822/3d-website.jpg",
      imageHeaderURL: "https://cdn-icons-png.flaticon.com/512/4524/4524987.png",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Title>Pricing</Title>
        <Subtitle>Choose your best plan</Subtitle>
        <CardContainer>
          {cardData.map((card, index) => (
            <Card key={index} animate={true}>
              <CardInner>
                <img src={card.imageHeaderURL} alt="Template" />
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
                <button>
                  <span>Choose Plan</span>
                </button>
              </Cta>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </Wrapper>
  );
};

export default PricingSection;
