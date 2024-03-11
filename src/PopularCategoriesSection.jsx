import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const PopularSection = styled.section`
  margin-top: 4rem;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
`;

const CategoryContainer = styled.div`
  margin: 20px;
  width: 100vw;
  @media (max-width: 768px) {
    margin: 3px;
  }
`;

const Category = styled.div`
  width: 80%;
  height: 35vh;
  padding: 20px;
  margin-right: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 45%;
    height: 16vh;
    padding: 10px;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 30vh;
  border-radius: 2rem;
  @media (max-width: 576px) {
    width: 100%;
    height: 12vh;
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
  font-size: 2rem;
  margin-left: 4rem;
  margin-bottom: 30px;
  color: #333;
  @media (max-width: 576px) {
    margin-left: 20px;
  }
`;

const InformationColumn = styled.div`
  width: 20%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 4px solid #1abc9c;
  border-radius: 2rem;
`;

const InformationList = styled.ul`
  list-style: none;
`;

const InformationItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const StarIcon = styled.span`
  color: gold;
  margin-left: 5px;
`;

const EmptyStarIcon = styled.span`
  color: gray;
  margin-left: 5px;
`;
const StarsContainer = styled.span`
  margin-left: 10px; /* Adjust the value as needed */
`;
const NumberCircle = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #333;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
`;

const PopularCategoriesSection = () => {
  const categories = [
    {
      title: "Real Estate",
      image: "https://www.w3schools.com/w3images/house5.jpg",
      stars: 4, // Example: Number of stars indicating popularity
    },
    {
      title: "Healthcare",
      image: "https://www.w3schools.com/w3images/team1.jpg",
      stars: 5, // Example: Number of stars indicating popularity
    },
    {
      title: "Travel",
      image: "https://www.w3schools.com/w3images/coffee.jpg",
      stars: 3,
    },
    {
      title: "Education",
      image: "https://www.w3schools.com/w3images/nature.jpg",
      stars: 2,
    },
    {
      title: "Adventure",
      image: "https://www.w3schools.com/w3images/mountains.jpg",
      stars: 5,
    },
    {
      title: "Nature",
      image: "https://www.w3schools.com/w3images/rocks.jpg",
      stars: 4,
    },
    {
      title: "Underwater",
      image: "https://www.w3schools.com/w3images/underwater.jpg",
      stars: 3,
    },
    {
      title: "Forest",
      image: "https://www.w3schools.com/w3images/forestbridge.jpg",
      stars: 4,
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 2);
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

  // Function to render stars based on the number of stars
  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < numStars) {
        stars.push(<StarIcon key={i}>★</StarIcon>);
      } else {
        stars.push(<EmptyStarIcon key={i}>☆</EmptyStarIcon>);
      }
    }
    return stars;
  };

  return (
    <PopularSection className="popular-categories-section">
      <CategoryContainer className="category-container">
        <Title>Popular Categories</Title>
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
      <InformationColumn>
        <Title>Weekly Popular</Title>
        <InformationList>
          {categories.map((category, index) => (
            <InformationItem key={index}>
              <NumberCircle>{index + 1}</NumberCircle>
              {category.title}
              <br />
              {renderStars(category.stars)}
            </InformationItem>
          ))}
        </InformationList>
      </InformationColumn>
    </PopularSection>
  );
};

export default PopularCategoriesSection;
