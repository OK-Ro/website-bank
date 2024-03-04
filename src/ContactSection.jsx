import React from "react";
import styled from "styled-components";

// Styled components for the Contact Section
const ContactSection = styled.section`
  margin-top: 40px;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactHeading = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-size: 16px;
  transition: background-color 0.3s;
  &:focus {
    background-color: #e0e0e0;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-size: 16px;
  resize: vertical;
  transition: background-color 0.3s;
  &:focus {
    background-color: #e0e0e0;
  }
`;

const FormButton = styled.button`
  padding: 12px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactForm>
          <FormInput type="text" placeholder="Your Name" />
          <FormInput type="email" placeholder="Your Email" />
          <FormTextarea rows="5" placeholder="Your Message"></FormTextarea>
          <FormButton type="submit">Send Message</FormButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
