import React from "react";
import styled from "styled-components";

// Styled components for the Featured Templates Section
const Section = styled.section`
  margin-top: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Template = styled.div`
  width: 30%;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s ease; /* Add transition effect */

  &:hover {
    transform: translateY(-5px); /* Move the template up slightly on hover */
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
        {/* Template 1 */}
        <Template className="template">
          <TemplateImage
            src="https://th.bing.com/th/id/OIP.Jj9J6E_COTFKUVjiKLorvwHaGZ?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="BusinessPro"
          />
          <TemplateTitle>BusinessPro</TemplateTitle>
          <TemplateDescription>
            A sleek and professional template perfect for business websites.
          </TemplateDescription>
          <FeaturedButton href="#" className="featured-btn">
            View Details
          </FeaturedButton>
        </Template>
        {/* Template 2 */}
        <Template className="template">
          <TemplateImage
            src="https://th.bing.com/th/id/OIP.LubZGdf1qHT7NvszV9AiKQHaFj?rs=1&pid=ImgDetMain"
            alt="CreativeWorks"
          />
          <TemplateTitle>CreativeWorks</TemplateTitle>
          <TemplateDescription>
            An innovative and creative template ideal for portfolio websites.
          </TemplateDescription>
          <FeaturedButton href="#" className="featured-btn">
            View Details
          </FeaturedButton>
        </Template>
        {/* Template 3 */}
        <Template className="template">
          <TemplateImage
            src="https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg"
            alt="E-StorePro"
          />
          <TemplateTitle>E-StorePro</TemplateTitle>
          <TemplateDescription>
            A fully customizable template designed for e-commerce and online
            stores.
          </TemplateDescription>
          <FeaturedButton href="#" className="featured-btn">
            View Details
          </FeaturedButton>
        </Template>
        {/* Template 4 */}
        <Template className="template">
          <TemplateImage
            src="https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg"
            alt="MagazinePlus"
          />
          <TemplateTitle>MagazinePlus</TemplateTitle>
          <TemplateDescription>
            An elegant and feature-rich template perfect for blogs and online
            magazines.
          </TemplateDescription>
          <FeaturedButton href="#" className="featured-btn">
            View Details
          </FeaturedButton>
        </Template>
        {/* Template 5 */}
        <Template className="template">
          <TemplateImage
            src="https://webneel.com/daily/sites/default/files/images/daily/02-2014/13-beautiful-website.jpg"
            alt="Travelify"
          />
          <TemplateTitle>Travelify</TemplateTitle>
          <TemplateDescription>
            A captivating template designed for travel blogs and tourism
            websites.
          </TemplateDescription>
          <FeaturedButton href="#" className="featured-btn">
            View Details
          </FeaturedButton>
        </Template>
        {/* Template 6 */}
        <Template className="template">
          <TemplateImage
            src="https://cdn.dribbble.com/users/5796985/screenshots/14427400/media/edbe0e672fc47d50a6b278f7c5ae0970.png"
            alt="FitLife"
          />
          <TemplateTitle>FitLife</TemplateTitle>
          <TemplateDescription>
            A vibrant and energetic template tailored for health and fitness
            websites.
          </TemplateDescription>
          <FeaturedButton href="#" className="featured-btn">
            View Details
          </FeaturedButton>
        </Template>
        {/* Add more templates as needed */}
      </Container>
    </Section>
  );
};

export default FeaturedTemplatesSection;
