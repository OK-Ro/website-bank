import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background-color: #f8f9fa;
  padding: 150px 0;
  margin: 3rem;
  border-radius: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 4px solid #1abc9c;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 200px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }

  .hero-container {
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }

  h1 {
    font-size: 6rem;
    color: #333;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 2rem;
    color: #555;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .cta-button {
    display: inline-block;
    padding: 15px 30px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    font-size: 16px;
  }

  .cta-button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 381rem;
    }

    p {
      font-size: 16px;
    }

    .cta-button {
      font-size: 14px;
      padding: 12px 24px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }

    .cta-button {
      font-size: 12px;
      padding: 10px 20px;
    }
  }
`;

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

export default HeroSectionComponent;
