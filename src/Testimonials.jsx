import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

// Styled components for the Testimonials Section
const TestimonialsSection = styled.section`
  margin-top: 40px;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Testimonial = styled.div`
  width: 70%;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TestimonialText = styled.div`
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.div`
  font-style: italic;
`;

const TestimonialImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TestimonialIcon = styled.div`
  font-size: 24px;
  color: #007bff;
  margin-bottom: 10px;
`;

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <h2>Testimonials</h2>
      <TestimonialsContainer>
        <Testimonial>
          <TestimonialIcon>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </TestimonialIcon>
          <TestimonialImage
            src="https://via.placeholder.com/100"
            alt="John Doe"
          />
          <TestimonialText>
            <p>
              "I am extremely satisfied with the website template I purchased
              from your platform. It was easy to customize and fit my needs
              perfectly."
            </p>
          </TestimonialText>
          <TestimonialAuthor>
            <p>- John Doe</p>
          </TestimonialAuthor>
        </Testimonial>
        <Testimonial>
          <TestimonialIcon>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </TestimonialIcon>
          <TestimonialImage
            src="https://via.placeholder.com/100"
            alt="Jane Smith"
          />
          <TestimonialText>
            <p>
              "The support team was incredibly helpful and responsive. They
              answered all of my questions promptly and made the process
              smooth."
            </p>
          </TestimonialText>
          <TestimonialAuthor>
            <p>- Jane Smith</p>
          </TestimonialAuthor>
        </Testimonial>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
