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
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0;
  }
`;

const FooterLink = styled.li`
  margin: 0 15px;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #ccc;
    }
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
  p {
    margin: 5px 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  .social-icon {
    margin: 0 10px;
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
          <FooterLink>
            <a href="/#">Terms of Service</a>
          </FooterLink>
          <FooterLink>
            <a href="/#">Privacy Policy</a>
          </FooterLink>
          <FooterLink>
            <a href="/#">FAQs</a>
          </FooterLink>
        </FooterLinks>

        {/* Contact Information */}
        <ContactInfo>
          <p>Contact Us:</p>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </ContactInfo>

        {/* Social Media Links */}
        <SocialLinks>
          <a href="/#" className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="/#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </SocialLinks>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
