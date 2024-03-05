import React from "react";
import styled from "styled-components";

// Styled components for the Footer Section
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

const FooterLinks = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #ccc;
  }
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
  }

  .social-icon:hover {
    color: #ccc;
  }
`;

const Footer = () => {
  return (
    <FooterSection className="footer-section">
      <FooterContainer className="footer-container">
        {/* Footer Links */}
        <FooterLinks className="footer-links">
          <ul>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </FooterLinks>
        {/* Contact Information */}
        <ContactInfo className="contact-info">
          <p>Contact Us:</p>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </ContactInfo>
        {/* Social Media Links */}
        <SocialLinks className="social-links">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </SocialLinks>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
