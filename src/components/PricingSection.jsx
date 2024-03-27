import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  font-family: "Yanone Kaffeesatz", sans-serif;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
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
  width: 300px;
  height: 500px;
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
  .description {
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
  .features {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      margin-bottom: 10px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
        color: #fe5e7d;
      }
    }
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
  const cardData = [
    {
      title: "Basic",
      price: "$24.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim ad minima veniam.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      imageURL:
        "https://www.photoshopvideotutorial.com/freepsdmock/wp-content/uploads/2020/01/Free-3d-Website-Mockup-Presentation-scaled.jpg",
      imageHeaderURL: "https://cdn-icons-png.flaticon.com/512/9545/9545135.png",
    },
    {
      title: "Standard",
      price: "$49.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim ad minima veniam.",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      imageURL:
        "https://design4users.com/wp-content/uploads/2021/04/3d-graphics-website-1536x1152.jpg",
      imageHeaderURL: "https://cdn-icons-png.flaticon.com/512/9464/9464073.png",
    },
    {
      title: "Premium",
      price: "$99.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim ad minima veniam.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      imageURL:
        "https://lh6.googleusercontent.com/proxy/Zd0gc5-DK2j9WPIKs3r4udd3QUc4-a-qg_Cpz2iBcvvljMXVkTT_3hyY6Ig_RA9nY-aDWwvFhXv91SyrcevI_Ikt=w1600",
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
                <div className="description">{card.description}</div>{" "}
                {/* Corrected classname */}
                <div className="title">{card.title}</div>
                <div className="features">
                  {card.features.map((feature, idx) => (
                    <p key={idx}>
                      <FontAwesomeIcon icon={faCheck} />
                      {feature}
                    </p>
                  ))}
                </div>
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
