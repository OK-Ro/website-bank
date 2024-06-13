import React from "react";
import styled, { keyframes } from "styled-components";

const bubbleSize = keyframes`
  0%, 75% {
    width: var(--size, 4rem);
    height: var(--size, 4rem);
  }
  100% {
    width: 0rem;
    height: 0rem;
  }
`;

const bubbleMove = keyframes`
  0% {
    bottom: -4rem;
  }
  100% {
    bottom: var(--distance, 10rem);
  }
`;

const FooterSection = styled.footer`
  position: relative;
  height: 22rem;
  background: #000;
`;

const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;

  .bubble {
    position: absolute;
    left: var(--position, 50%);
    background: radial-gradient(circle, #ff5722 20%, transparent 80%);
    border-radius: 50%;
    animation: ${bubbleSize} var(--time, 4s) ease-in infinite var(--delay, 0s),
      ${bubbleMove} var(--time, 4s) ease-in infinite var(--delay, 0s);
    transform: translate(-50%, 100%);
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  padding: 2rem;
  background: #000;
  color: #f5f7fa;

  a {
    color: #f5f7fa;
    text-decoration: none;
    margin-right: 0.5rem;
  }

  .image {
    width: 4rem;
    height: 4rem;
    background-size: cover;
    background-position: center;
  }
`;

const Footer = () => {
  const bubbles = Array.from({ length: 128 }, () => ({
    size: `${2 + Math.random() * 4}rem`,
    distance: `${6 + Math.random() * 4}rem`,
    position: `${-5 + Math.random() * 110}%`,
    time: `${2 + Math.random() * 2}s`,
    delay: `${-1 * (2 + Math.random() * 2)}s`,
  }));

  return (
    <FooterSection>
      <Bubbles>
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              "--size": bubble.size,
              "--distance": bubble.distance,
              "--position": bubble.position,
              "--time": bubble.time,
              "--delay": bubble.delay,
            }}
          />
        ))}
      </Bubbles>
      <Content>
        <div>
          <div>
            <b>Eldew</b>
            <a href="#">Secuce</a>
            <a href="#">Drupand</a>
            <a href="#">Oceash</a>
            <a href="#">Ugefe</a>
            <a href="#">Babed</a>
          </div>
          <div>
            <b>Spotha</b>
            <a href="#">Miskasa</a>
            <a href="#">Agithe</a>
            <a href="#">Scesha</a>
            <a href="#">Lulle</a>
          </div>
          <div>
            <b>Chashakib</b>
            <a href="#">Chogauw</a>
            <a href="#">Phachuled</a>
            <a href="#">Tiebeft</a>
            <a href="#">Ocid</a>
            <a href="#">Izom</a>
            <a href="#">Ort</a>
          </div>
          <div>
            <b>Athod</b>
            <a href="#">Pamuz</a>
            <a href="#">Vapert</a>
            <a href="#">Neesk</a>
            <a href="#">Omemanen</a>
          </div>
        </div>
        <div>
          <a
            className="image"
            href="https://codepen.io/z-"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundImage:
                "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg')",
            }}
          />
          <p>©2019 Not Really</p>
        </div>
      </Content>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </FooterSection>
  );
};

export default Footer;
