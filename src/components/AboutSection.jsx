import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f8f9fa;
  padding: 200px 0;

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const AboutContent = styled.div`
  flex: 1;
  max-width: 800px;
  text-align: center;
`;

const AboutHeading = styled.h2`
  font-size: 4rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.6rem;
  color: #555;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const AboutImageLeft = styled.img`
  width: 35%;
  height: 40vh;
  margin-right: 40px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
    height: auto;
  }
`;

const AboutImageRight = styled.img`
  width: 35%;
  height: 40vh;
  margin-left: 40px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    height: auto;
  }
`;

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const Testimonial = styled.div`
  max-width: 300px;
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1.4rem;
  color: #777;
`;

const TestimonialAuthor = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #999;
`;

const AboutSection = () => {
  return (
    <Section id="about">
      <AboutContainer>
        <AboutImageLeft
          src="https://www.bing.com/th?id=OADD2.8864818430287_1S15A0UFLNE8VI0IJV&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=472&h=247&rs=2"
          alt="Left"
        />
        <AboutContent>
          <AboutHeading>About Us</AboutHeading>
          <AboutDescription>
            Website Bank is your one-stop destination for high-quality website
            templates. Whether you're a business owner looking to establish an
            online presence, a freelancer showcasing your portfolio, or an
            entrepreneur starting an e-commerce venture, we have the perfect
            template for you. Our templates are professionally designed, fully
            customizable, and optimized for performance. With Website Bank,
            creating your dream website has never been easier.
          </AboutDescription>
          <button>Learn More</button>
        </AboutContent>
        <AboutImageRight
          src="https://th.bing.com/th/id/OIP.Vj8z4bemjSqAtnFXtjVaOwHaFX?w=268&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Right"
        />
      </AboutContainer>
      <TestimonialContainer>
        <Testimonial>
          <TestimonialText>
            "Website Bank provided me with an amazing template that perfectly
            suited my business needs. I highly recommend their services!"
          </TestimonialText>
          <TestimonialAuthor>- John Doe</TestimonialAuthor>
        </Testimonial>
        <Testimonial>
          <TestimonialText>
            "Thanks to Website Bank, I was able to launch my online store
            quickly and efficiently. Their templates are top-notch!"
          </TestimonialText>
          <TestimonialAuthor>- Jane Smith</TestimonialAuthor>
        </Testimonial>
      </TestimonialContainer>
    </Section>
  );
};

export default AboutSection;
