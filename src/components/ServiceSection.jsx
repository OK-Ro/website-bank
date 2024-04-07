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

  .txt {
    margin-left: -3rem;
    z-index: 1;
    h1 {
      font-size: 1.5rem;
      font-weight: 300;
      text-transform: uppercase;
    }
    p {
      font-size: 0.7rem;
      font-family: "Open Sans", sans-serif;
      letter-spacing: 0rem;
      margin-top: 33px;
      opacity: 0;
      color: rgba(255, 255, 255, 1);
    }
  }

  a {
    z-index: 3;
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 1);
    margin-left: 1rem;
    position: relative;
    bottom: -0.5rem;
    text-transform: uppercase;
    &:after {
      content: "";
      display: inline-block;
      height: 0.5em;
      width: 0;
      margin-right: -100%;
      margin-left: 10px;
      border-top: 1px solid rgba(255, 255, 255, 1);
      transition: 0.5s;
    }
  }

  .ico-card {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  i {
    position: relative;
    right: -50%;
    top: 60%;
    font-size: 12rem;
    line-height: 0;
    opacity: 0.2;
    color: rgba(255, 255, 255, 1);
    z-index: 0;
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
        <Service className="card gr-1">
          <div className="ico-card">
            <FontAwesomeIcon icon={faPencilAlt} className="icon" />
          </div>
          <div className="txt">
            <ServiceTitle>Website Design</ServiceTitle>
            <ServiceDescription>
              Professionally designed website templates tailored to your needs.
            </ServiceDescription>
          </div>
          <a href="/">Learn More</a>
        </Service>
        <Service className="card gr-2">
          <div className="ico-card">
            <FontAwesomeIcon icon={faCogs} className="icon" />
          </div>
          <div className="txt">
            <ServiceTitle>Customization</ServiceTitle>
            <ServiceDescription>
              Tailor our templates to match your brand identity and vision.
            </ServiceDescription>
          </div>
          <a href="/">Learn More</a>
        </Service>
        <Service className="card gr-3">
          <div className="ico-card">
            <FontAwesomeIcon icon={faServer} className="icon" />
          </div>
          <div className="txt">
            <ServiceTitle>Hosting</ServiceTitle>
            <ServiceDescription>
              Reliable hosting solutions to keep your website online 24/7.
            </ServiceDescription>
          </div>
          <a href="/">Learn More</a>
        </Service>
        <Service className="card gr-1">
          <div className="ico-card">
            <FontAwesomeIcon icon={faLifeRing} className="icon" />
          </div>
          <div className="txt">
            <ServiceTitle>Support</ServiceTitle>
            <ServiceDescription>
              Dedicated customer support to assist you whenever you need.
            </ServiceDescription>
          </div>
          <a href="/">Learn More</a>
        </Service>
      </Container>
    </Section>
  );
};

export default ServicesSection;
