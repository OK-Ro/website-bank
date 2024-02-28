import React from "react";
import styled from "styled-components";

function HeroSectionComponent() {
  return (
    <HeroSection>
      <div className="hero-container">
        <h1>Discover Your Perfect Website</h1>
        <p>
          Find the ideal website template for your project with Website Bank.
          Our carefully curated selection offers templates for every need, from
          sleek business sites to captivating portfolios and vibrant e-commerce
          stores. Stand out from the crowd and impress your visitors with our
          professionally designed and fully customizable templates. Get started
          today and unlock the potential of your online presence!
        </p>
        <a href="#templates" className="cta-button">
          Explore Templates
        </a>
      </div>
    </HeroSection>
  );
}
const HeroSection = styled.section`
  .hero-container {
    text-align: center;
    padding: 0 20px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .cta-button {
    display: inline-block;
    padding: 12px 30px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }

    .cta-button {
      font-size: 14px;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }

    .cta-button {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
`;

export default HeroSectionComponent;
