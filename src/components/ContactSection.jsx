import React from "react";
import styled from "styled-components";

// Styled components
const ContactFormContainer = styled.div`
  background: #f4f3f3;
  font-family: "Lato", sans-serif;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 20px;
`;

const ContactUs = styled.div`
  position: relative;
  background: #c3e0ec;
  overflow: hidden;
`;

const ContactHeader = styled.div`
  color: white;
  position: absolute;
  transform: rotate(-90deg);
  top: 50%;
  left: -30px;
  font-size: 1.5rem;
`;

const SocialBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  li {
    margin-right: 10px;
  }
  i {
    color: white;
    font-size: 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  color: #444;
`;

const Address = styled.div`
  text-align: center;
  color: #444;
`;

const ContactForm = styled.form`
  width: 100%;
  grid-column: span 4;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: white;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #9ed8eb;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

// React component
const ContactSection = () => {
  return (
    <ContactFormContainer>
      <ContactUs>
        <ContactHeader>
          <h1>CONTACT US</h1>
        </ContactHeader>
        <SocialBar>
          <ul>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-dribbble"></i>
            </li>
          </ul>
        </SocialBar>
      </ContactUs>
      <Header>
        <h1>Let's Get Started</h1>
        <h2>Contact us to start your next project!</h2>
      </Header>
      <Address>
        <i className="fas fa-map-marker-alt"></i>
        <h3>8266 Gygax</h3>
        <h3>Norfolk, VA</h3>
      </Address>
      <Address>
        <i className="fas fa-phone-alt"></i>
        <h3>757 287 1608</h3>
      </Address>
      <Address>
        <i className="fas fa-envelope"></i>
        <h3>hello@adept.com</h3>
      </Address>
      <ContactForm>
        <InputField type="text" placeholder="Name" />
        <InputField type="email" placeholder="Email" />
        <TextArea rows="4" placeholder="Tell us about your project..." />
        <SubmitButton type="submit">SEND</SubmitButton>
      </ContactForm>
    </ContactFormContainer>
  );
};

export default ContactSection;
