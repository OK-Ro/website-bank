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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate sending an email (replace with your actual logic)
      await sendEmail({ name, email, message });
      // Show success toast message
      toast.success("Message sent successfully!");
      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // Handle error, show error toast message
      toast.error("Failed to send message. Please try again later.");
    }
  };

  // Function to send email (replace with your actual logic)
  const sendEmail = async ({ name, email, message }) => {
    // Simulate sending email with a delay (replace with actual logic)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Log the details (replace with actual email sending logic)
    console.log("Sending email...");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
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
