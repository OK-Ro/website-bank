import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  font-family: "Yanone Kaffeesatz", sans-serif;
  height: 40vh;
`;

const Container = styled.div`
  width: 938px;
  position: absolute;
  top: 50%;
  left: 30px;
  right: 0;
  transform: translateY(-50%);
  margin: auto;
`;

const Card = styled.div`
  margin: 0 auto;
  display: inline-block;
  margin-right: 30px;
  width: 280px;
  text-align: center;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  opacity: 0.5;
  box-shadow: 0px 17px 46px -10px #777777;
  height: 470px;
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
    height: 26px;
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
    width: 120%;
    position: relative;
    top: -30px;
    left: 0;
    transition: all 0.1s linear;
  }
`;

const Content = styled.div`
  padding: 20px;
  .price {
    color: white;
    font-weight: 800;
    font-size: 70px;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
  }
  .text {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 100;
    margin-top: 20px;
    font-size: 13px;
    line-height: 16px;
  }
  .title {
    font-weight: 800;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.64);
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
  return (
    <Wrapper>
      <Container>
        {[1, 2, 3].map((item, index) => (
          <Card key={index} animate={true}>
            <CardInner>
              <img
                src="https://www.photoshopvideotutorial.com/freepsdmock/wp-content/uploads/2020/01/Free-3d-Website-Mockup-Presentation-scaled.jpg"
                alt="Template"
              />
            </CardInner>
            <Header>
              <img
                src="https://design4users.com/wp-content/uploads/2021/04/3d-graphics-website-1536x1152.jpg.pagespeed.ce.3LDt6M4m8E.jpg"
                alt="Template Header"
              />
            </Header>
            <Content>
              <div className="price">$24.99</div>
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="title">Template Title</div>
            </Content>
            <Cta>
              <button>
                <span>Choose Plan</span>
              </button>
            </Cta>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default PricingSection;
