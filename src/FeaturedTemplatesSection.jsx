import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TemplateWrapper = styled.div`
  width: 30%;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const TemplateImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const TemplateTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
`;

const TemplateDescription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

const FeaturedButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FeaturedTemplatesSection = () => {
  const templates = [
    {
      title: "BusinessPro",
      image:
        "https://th.bing.com/th/id/OIP.Jj9J6E_COTFKUVjiKLorvwHaGZ?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description:
        "A sleek and professional template perfect for business websites.",
      link: "#",
    },
    {
      title: "CreativeWorks",
      image:
        "https://th.bing.com/th/id/OIP.LubZGdf1qHT7NvszV9AiKQHaFj?rs=1&pid=ImgDetMain",
      description:
        "An innovative and creative template ideal for portfolio websites.",
      link: "#",
    },
    {
      title: "E-StorePro",
      image:
        "https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
      description:
        "A fully customizable template designed for e-commerce and online stores.",
      link: "#",
    },
    {
      title: "MagazinePlus",
      image:
        "https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg",
      description:
        "An elegant and feature-rich template perfect for blogs and online magazines.",
      link: "#",
    },
    {
      title: "Travelify",
      image:
        "https://webneel.com/daily/sites/default/files/images/daily/02-2014/13-beautiful-website.jpg",
      description:
        "A captivating template designed for travel blogs and tourism websites.",
      link: "#",
    },
    {
      title: "FitLife",
      image:
        "https://cdn.dribbble.com/users/5796985/screenshots/14427400/media/edbe0e672fc47d50a6b278f7c5ae0970.png",
      description:
        "A vibrant and energetic template tailored for health and fitness websites.",
      link: "#",
    },
  ];

  return (
    <Section className="featured-templates-section">
      <Container className="featured-templates-container">
        {templates.map((template, index) => (
          <TemplateWrapper key={index}>
            <TemplateImage src={template.image} alt={template.title} />
            <TemplateTitle>{template.title}</TemplateTitle>
            <TemplateDescription>{template.description}</TemplateDescription>
            <FeaturedButton href={template.link} className="featured-btn">
              View Details
            </FeaturedButton>
          </TemplateWrapper>
        ))}
      </Container>
    </Section>
  );
};

export default FeaturedTemplatesSection;
