import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending an email (replace this with your actual logic)
    sendEmail(name, email, message);

    // Show a success toast message
    toast.success("Message sent successfully!");

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  // Function to simulate sending an email (replace this with your actual email sending logic)
  const sendEmail = (name, email, message) => {
    console.log(
      `Sending email to ${email} from ${name} with message: ${message}`
    );
    // Here you can add your actual email sending logic
    // For example, you can use a library like Nodemailer to send emails from a Node.js server
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactForm onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormTextarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></FormTextarea>
          <FormButton type="submit">Send Message</FormButton>
        </ContactForm>
      </ContactContainer>
      <ToastContainer />
    </ContactSection>
  );
};

export default Contact;
