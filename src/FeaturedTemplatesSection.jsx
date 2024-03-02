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
