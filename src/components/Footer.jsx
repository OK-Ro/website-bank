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
  grid-area: footer;
  position: relative;
  height: 22rem;
  background: #000;
  z-index: 1;
`;

const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  background: #ed5565;
  filter: url("#blob");

  .bubble {
    position: absolute;
    left: var(--position, 50%);
    background: linear-gradient(
      to bottom,
      #ff5722,
      #ff9800,
      #ffeb3b,
      #ffc107,
      #ff5722
    );
    z-index: 1;
    border-radius: 100%;
    animation: ${bubbleSize} var(--time, 4s) ease-in infinite var(--delay, 0s),
      ${bubbleMove} var(--time, 4s) ease-in infinite var(--delay, 0s);
    transform: translate(-50%, 100%);
  }
`;

const Content = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 4rem;
  padding: 2rem;
  background: #000;
  padding-top: 9rem;

  a,
  p {
    color: #f5f7fa;
    text-decoration: none;
  }

  b {
    color: white;
  }

  p {
    margin: 0;
    font-size: 0.75rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div {
      margin: 0.25rem 0;

      > * {
        margin-right: 0.5rem;
      }
    }

    .image {
      align-self: center;
      width: 4rem;
      height: 4rem;
      margin: 0.25rem 0;
      background-size: cover;
      background-position: center;
    }
  }
`;

const Footer = () => {
  const bubbles = Array.from({ length: 128 }, (_, i) => ({
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
          ></div>
        ))}
      </Bubbles>
      <Content>
        <div>
          <div>
            <b>Eldew</b>
            <a href="#" aria-label="Secuce">
              Secuce
            </a>
            <a href="#" aria-label="Drupand">
              Drupand
            </a>
            <a href="#" aria-label="Oceash">
              Oceash
            </a>
            <a href="#" aria-label="Ugefe">
              Ugefe
            </a>
            <a href="#" aria-label="Babed">
              Babed
            </a>
          </div>
          <div>
            <b>Spotha</b>
            <a href="#" aria-label="Miskasa">
              Miskasa
            </a>
            <a href="#" aria-label="Agithe">
              Agithe
            </a>
            <a href="#" aria-label="Scesha">
              Scesha
            </a>
            <a href="#" aria-label="Lulle">
              Lulle
            </a>
          </div>
          <div>
            <b>Chashakib</b>
            <a href="#" aria-label="Chogauw">
              Chogauw
            </a>
            <a href="#" aria-label="Phachuled">
              Phachuled
            </a>
            <a href="#" aria-label="Tiebeft">
              Tiebeft
            </a>
            <a href="#" aria-label="Ocid">
              Ocid
            </a>
            <a href="#" aria-label="Izom">
              Izom
            </a>
            <a href="#" aria-label="Ort">
              Ort
            </a>
          </div>
          <div>
            <b>Athod</b>
            <a href="#" aria-label="Pamuz">
              Pamuz
            </a>
            <a href="#" aria-label="Vapert">
              Vapert
            </a>
            <a href="#" aria-label="Neesk">
              Neesk
            </a>
            <a href="#" aria-label="Omemanen">
              Omemanen
            </a>
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
            aria-label="Visit Codepen"
          ></a>
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
