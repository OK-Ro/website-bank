import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCogs,
  faServer,
  faLifeRing,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Service = styled.div`
  padding: 30px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  margin-bottom: 20px;
  color: #007bff;
  font-size: 3rem;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const ServiceFeatures = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;

const ServiceFeature = styled.li`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;

  svg {
    margin-right: 5px;
    color: #007bff;
  }
`;

const ServicesSection = () => {
  return (
    <Section>
      <Container>
        <Service>
          <ServiceIcon>
            <FontAwesomeIcon icon={faPencilAlt} />
          </ServiceIcon>
          <ServiceTitle>Website Design</ServiceTitle>
          <ServiceDescription>
            Professionally designed website templates tailored to your needs.
          </ServiceDescription>
          <ServiceFeatures>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Responsive Design
            </ServiceFeature>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Modern UI/UX
            </ServiceFeature>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Customizable Layouts
            </ServiceFeature>
          </ServiceFeatures>
        </Service>
        <Service>
          <ServiceIcon>
            <FontAwesomeIcon icon={faCogs} />
          </ServiceIcon>
          <ServiceTitle>Customization</ServiceTitle>
          <ServiceDescription>
            Tailor our templates to match your brand identity and vision.
          </ServiceDescription>
          <ServiceFeatures>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Brand Integration
            </ServiceFeature>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Color Customization
            </ServiceFeature>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Font Selection
            </ServiceFeature>
          </ServiceFeatures>
        </Service>
        <Service>
          <ServiceIcon>
            <FontAwesomeIcon icon={faServer} />
          </ServiceIcon>
          <ServiceTitle>Hosting</ServiceTitle>
          <ServiceDescription>
            Reliable hosting solutions to keep your website online 24/7.
          </ServiceDescription>
          <ServiceFeatures>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              High Uptime Guarantee
            </ServiceFeature>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Scalable Infrastructure
            </ServiceFeature>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Security Measures
            </ServiceFeature>
          </ServiceFeatures>
        </Service>
        <Service>
          <ServiceIcon>
            <FontAwesomeIcon icon={faLifeRing} />
          </ServiceIcon>
          <ServiceTitle>Support</ServiceTitle>
          <ServiceDescription>
            Dedicated customer support to assist you whenever you need.
          </ServiceDescription>
          <ServiceFeatures>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              24/7 Availability
            </ServiceFeature>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Experienced Team
            </ServiceFeature>
            <ServiceFeature>
              <FontAwesomeIcon icon={faCheck} />
              Timely Responses
            </ServiceFeature>
          </ServiceFeatures>
        </Service>
      </Container>
    </Section>
  );
};

export default ServicesSection;
