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
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Testimonial = styled.div`
  width: 45%;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const TestimonialIcon = styled.div`
  margin-right: 10px;
`;

const TestimonialImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const TestimonialText = styled.div`
  flex-grow: 1;
`;

const TestimonialAuthor = styled.div`
  font-style: italic;
`;

const TestimonialsComponent = () => {
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

export default TestimonialsComponent;
