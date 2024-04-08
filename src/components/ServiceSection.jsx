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
  const servicesData = [
    {
      icon: faPencilAlt,
      title: "Website Design",
      description:
        "Professionally designed website templates tailored to your needs.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Customizable Layouts",
        "SEO Optimization",
        "Social Media Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: faCogs,
      title: "Customization",
      description:
        "Tailor our templates to match your brand identity and vision.",
      features: [
        "Brand Integration",
        "Color Customization",
        "Font Selection",
        "E-commerce Integration",
        "Multi-language Support",
        "Performance Optimization",
      ],
    },
    {
      icon: faServer,
      title: "Hosting",
      description:
        "Reliable hosting solutions to keep your website online 24/7.",
      features: [
        "High Uptime Guarantee",
        "Scalable Infrastructure",
        "Security Measures",
        "SSL Certificate",
        "Automatic Backups",
        "Performance Optimization",
      ],
    },
    {
      icon: faLifeRing,
      title: "Support",
      description:
        "Dedicated customer support to assist you whenever you need.",
      features: [
        "24/7 Availability",
        "Experienced Team",
        "Timely Responses",
        "Knowledge Base",
        "Ticketing System",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <Section>
      <Container>
        {servicesData.map((service, index) => (
          <Service key={index}>
            <ServiceIcon>
              <FontAwesomeIcon icon={service.icon} />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceFeatures>
              {service.features.map((feature, index) => (
                <ServiceFeature key={index}>
                  <FontAwesomeIcon icon={faCheck} />
                  {feature}
                </ServiceFeature>
              ))}
            </ServiceFeatures>
          </Service>
        ))}
      </Container>
    </Section>
  );
};

export default ServicesSection;
