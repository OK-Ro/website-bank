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
  padding: 40px 0;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactInfo = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SocialLinks = styled.div`
  .social-icon {
    margin-right: 10px;
    color: #fff;
    font-size: 24px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ccc;
    }
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
