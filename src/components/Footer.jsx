import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    li {
      margin: 0 15px;
    }
  }
`;

const ContactInfo = styled.div`
  margin: 20px 0;
  text-align: center;

  p {
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .social-icon {
    margin: 0 10px;
    color: #fff;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #ccc;
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        {/* Footer Links */}
        <FooterLinks>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </FooterLinks>

        {/* Contact Information */}
        <ContactInfo>
          <p>Contact Us:</p>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </ContactInfo>

        {/* Social Media Links */}
        <SocialLinks>
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </SocialLinks>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
