import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCogs,
  faServer,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  margin-top: 40px;
  background-color: #f8f9fa;
  padding: 60px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Service = styled.div`
  width: 300px;
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  /* Additional styling for icon */
  .icon {
    margin-bottom: 20px;
    color: #007bff; /* Change icon color */
    font-size: 3rem; /* Adjust icon size */
  }
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

const ServicesSection = () => {
  return (
    <Section className="services-section">
      <Container className="services-container">
        <Service>
          <FontAwesomeIcon icon={faPencilAlt} className="icon" />
          <ServiceTitle>Website Design</ServiceTitle>
          <ServiceDescription>
            We offer professionally designed website templates to suit various
            needs and industries.
          </ServiceDescription>
        </Service>
        <Service>
          <FontAwesomeIcon icon={faCogs} className="icon" />
          <ServiceTitle>Customization</ServiceTitle>
          <ServiceDescription>
            Customize our templates to match your brand identity and unique
            requirements.
          </ServiceDescription>
        </Service>
        <Service>
          <FontAwesomeIcon icon={faServer} className="icon" />
          <ServiceTitle>Hosting</ServiceTitle>
          <ServiceDescription>
            Reliable hosting solutions to ensure your website is always
            accessible to visitors.
          </ServiceDescription>
        </Service>
        <Service>
          <FontAwesomeIcon icon={faLifeRing} className="icon" />
          <ServiceTitle>Support</ServiceTitle>
          <ServiceDescription>
            24/7 customer support to assist you with any questions or issues you
            may encounter.
          </ServiceDescription>
        </Service>
      </Container>
    </Section>
  );
};

export default ServicesSection;
