import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

// Styled components for the Testimonials Section

const TestimonialsSection = styled.section`
  margin-top: 40px;
  text-align: center;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const Testimonial = styled.div`
  flex: 0 1 calc(25% - 20px); /* Adjust width according to the number of testimonials you want in a row */
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 20px); /* Adjust width for smaller screens */
  }
`;

const TestimonialIcon = styled.div`
  color: #007bff;
  font-size: 24px;
  margin-bottom: 10px;
`;

const TestimonialImage = styled.img`
  width: 100px; /* Adjust image size as needed */
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TestimonialText = styled.div`
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.div`
  font-style: italic;
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
            src="https://th.bing.com/th/id/OIP.jAEnONxlpsGr8oF6yPHI9QHaHZ?w=200&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
            src="https://www.bing.com/th?id=OIP.kx4PP2AZfFKfNHq0yOMSAAHaNJ&w=150&h=267&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
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

        <Testimonial>
          <TestimonialIcon>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </TestimonialIcon>
          <TestimonialImage
            src="https://th.bing.com/th/id/OIP.7mHXjj_rXnhRlqCfJ-Ew_AHaHF?pid=ImgDet&w=200&h=191&c=7&dpr=1,3"
            alt="John Doe"
          />
          <TestimonialText>
            <p>
              "I'm very pleased with the service provided by Company X. Their
              professionalism and attention to detail exceeded my expectations.
              I highly recommend their services."
            </p>
          </TestimonialText>
          <TestimonialAuthor>
            <p>- Alex Bax</p>
          </TestimonialAuthor>
        </Testimonial>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
