import React from "react";
import styled from "styled-components";

const HeroSection = styled.section``;

const Container = styled.div`
  margin: 3rem;
  border-radius: 2rem;

  @media (max-width: 768px) {
    padding: 200px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  width: 80%;
  margin-left: 3rem;
`;

const Title = styled.h1`
  font-size: 10rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  width: 125%;

  @media (max-width: 768px) {
    font-size: 3.81rem;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  width: 125%;
  font-size: 2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-top: 6rem;
  margin-bottom: 7rem;
  width: 45vw;
  z-index: 999;
  padding: 2rem 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem 4rem 0.5rem 1rem;
  width: 100%;
  height: 6rem;
  border-radius: 4rem;
  font-size: 1rem;
  border: none;
  background: white;
  box-shadow: 0 9px 90px rgba(0, 0, 0, 0.2);
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: -4rem;
  transform: translateY(-50%);
  padding: 1.5rem 7rem;
  border-radius: 4rem;
  border: none;
  background-color: #1abc9c;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  border: 5px solid #fff;
  box-shadow: 0 0 10px rgba(27, 131, 166, 0.6);
`;

const SpecialBlock = styled.div`
  position: absolute;
  top: 50%;
  left: -6rem;
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  display: grid;
  grid-template-columns: repeat(6, 1rem);
  grid-template-rows: repeat(4, 1rem);
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 2px; // Adjust the border-radius to control the shape
  background-color: #000; // You can remove this line to remove the color
`;

function HeroSectionComponent() {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Title>Discover Your Perfect Website</Title>
          <Paragraph>
            Find your ideal website template with Website Bank. From business
            sites to e-commerce stores, our curated selection has it all.
            Impress visitors with professionally designed templates. Start today
            and unlock your online presence!
          </Paragraph>

          <SearchContainer>
            <SearchInput type="text" placeholder="Search templates..." />
            <SearchButton>Search</SearchButton>
          </SearchContainer>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}

export default HeroSectionComponent;
