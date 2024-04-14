import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(to right, #01e4f8 0%, #1d3ede 100%);
  color: white;
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 10rem;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Paragraph = styled.p`
  font-size: 2rem;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-top: 6rem;
  margin-bottom: 7rem;
  width: 45vw;
  padding: 2rem 0;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 4rem 0.5rem 1rem;
  width: 100%;
  height: 6.5rem;
  border-radius: 4rem;
  font-size: 1rem;
  border: none;
  background: white;
  box-shadow: 0 9px 90px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 2.4rem;
  }
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
  border: 4px solid white;
  box-shadow: 0 0 10px rgba(27, 131, 166, 0.6);

  @media (max-width: 768px) {
    padding: 0.8rem 2.9rem;
    font-size: 1rem;
    right: -38%;
    top: 28%;
  }
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

  @media (max-width: 768px) {
    left: -0.5rem;
    width: 1rem;
    height: 1rem;
    gap: 0.1rem;
    grid-template-columns: repeat(7, 0.6rem);
    grid-template-rows: repeat(2, 1rem);
  }
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  border: 2px solid white;
  background: linear-gradient(to right, #1abc9c, #1abc9c, #1abc9c);

  @media (max-width: 768px) {
    width: 0.5rem;
    height: 0.4rem;
  }
`;

function HeroSectionComponent() {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Title>Welcome to My Portfolio</Title>
          <Paragraph>
            Explore my portfolio to discover my latest projects and skills. Get
            in touch with me to discuss potential collaborations.
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
