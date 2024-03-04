import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #f8f9fa;
  padding: 40px 0;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

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
