import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const PopularSection = styled.section`
  margin-top: 40px;
`;

const CategoryContainer = styled.div`
  margin: 20px;
`;

const Category = styled.div`
  width: 90%;
  height: 35vh;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-right: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 45%;
    height: 16vh;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 30vh;
  border-radius: 8px;
  @media (max-width: 576px) {
    width: 100%;
    height: 14vh;
  }
`;

const CategoryTitle = styled.h3`
  margin-top: 25px;
  font-size: 18px;
  color: #333;
  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  @media (max-width: 576px) {
    margin-left: 20px;
  }
`;

const PopularCategoriesSection = () => {
  const categories = [
    {
      title: "Real Estate",
      image: "https://www.w3schools.com/w3images/house5.jpg",
    },
    {
      title: "Healthcare",
      image: "https://www.w3schools.com/w3images/team1.jpg",
    },
    { title: "Travel", image: "https://www.w3schools.com/w3images/coffee.jpg" },
    {
      title: "Education",
      image: "https://www.w3schools.com/w3images/nature.jpg",
    },
    {
      title: "Adventure",
      image: "https://www.w3schools.com/w3images/mountains.jpg",
    },
    { title: "Nature", image: "https://www.w3schools.com/w3images/rocks.jpg" },
    {
      title: "Underwater",
      image: "https://www.w3schools.com/w3images/underwater.jpg",
    },
    {
      title: "Forest",
      image: "https://www.w3schools.com/w3images/forestbridge.jpg",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 4 : 2);
    };

    // Call the function to update items per page initially
    updateItemsPerPage();

    // Add event listener to update items per page when window is resized
    window.addEventListener("resize", updateItemsPerPage);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  return (
    <PopularSection className="popular-categories-section">
      <Title>Popular Categories</Title>
      <CategoryContainer className="category-container">
        <Splide
          options={{
            perPage: itemsPerPage,
            gap: "0.2rem",
            pagination: false,
            arrows: false,
            autoplay: true,
            interval: 3000,
          }}
        >
          {categories.map((category, index) => (
            <SplideSlide key={index}>
              <Category>
                <CategoryImage src={category.image} alt={category.title} />
                <CategoryTitle>{category.title}</CategoryTitle>
              </Category>
            </SplideSlide>
          ))}
        </Splide>
      </CategoryContainer>
    </PopularSection>
  );
};

export default PopularCategoriesSection;
