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
  padding: 2rem 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem 4rem 0.5rem 1rem;
  width: 96%;
  height: 6.5rem;
  border-radius: 4rem;
  font-size: 1rem;
  border: none;
  background: white;
  box-shadow: 0 9px 90px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 20%;
  right: 0;
  padding: 1.7rem 7rem;
  border-radius: 4rem;
  background-color: #1abc9c;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  border: 4px solid white; /* Border declaration */
  box-shadow: 0 0 10px rgba(27, 131, 166, 0.6);
  z-index: 1000;
`;

const SpecialBlock = styled.div`
  position: relative;
  top: 50%;
  left: -3rem;
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  display: grid;
  grid-template-columns: repeat(7, 1.1rem);
  grid-template-rows: repeat(4, 1rem);
  gap: 0.5rem;
  z-index: 1;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  background: linear-gradient(to right, #1abc9c, #1abc9c, black);
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
            <SpecialBlock>
              {[...Array(49)].map((_, index) => (
                <Dot key={index} />
              ))}
            </SpecialBlock>
            <SearchButton>Search</SearchButton>
          </SearchContainer>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}

export default HeroSectionComponent;
