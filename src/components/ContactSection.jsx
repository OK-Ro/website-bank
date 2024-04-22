import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  scroll-behavior: smooth;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
  background-image: radial-gradient(
      at 40% 20%,
      rgb(255, 184, 122) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, rgb(31, 221, 255) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgb(255, 219, 222) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgb(255, 133, 173) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgb(255, 181, 138) 0px, transparent 50%),
    radial-gradient(at 80% 100%, rgb(107, 102, 255) 0px, transparent 50%),
    radial-gradient(at 0% 0%, rgb(255, 133, 167) 0px, transparent 50%);
  background-repeat: no-repeat;
`;

const ContactFormContainer = styled.div`
  background: #f4f3f3;
  font-family: "Lato", sans-serif;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 2fr;
  grid-template-areas:
    "contact-us header header header"
    "contact-us address phone email"
    "contact-us contact-form contact-form contact-form";
`;

const ContactUs = styled.div`
  position: relative;
  width: 250px;
  background: #c3e0ec;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    bottom: -50px;
    left: -100px;
    height: 250px;
    width: 400px;
    background: #f8b7d8;
    transform: rotate(25deg);
  }

  &:after {
    position: absolute;
    content: "";
    bottom: -80px;
    right: -100px;
    height: 270px;
    width: 400px;
    background: #9ed8eb;
    transform: rotate(-25deg);
  }
`;

const ContactHeader = styled.div`
  color: white;
  position: absolute;
  transform: rotate(-90deg);
  top: 120px;
  left: -40px;

  & h1 {
    font-size: 1.5rem;
  }
`;

const SocialBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 75px;
  z-index: 1;
  width: 100px;

  & ul {
    list-style-type: none;
  }

  & li {
    display: inline-block;
    color: white;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    margin-right: -4px;
    font-size: 1.2rem;
  }
`;

const Header = styled.div`
  text-align: center;
  padding: 20px 0;
  color: #444;

  & h1 {
    font-weight: normal;
  }

  & h2 {
    margin-top: 10px;
    font-weight: 300;
  }
`;

const Address = styled.div`
  text-align: center;
  padding: 20px 0;
  color: #444;

  & h3 {
    font-size: 1rem;
    font-weight: 300;
  }

  & i {
    color: #f8b7d8;
    font-size: 1.7rem;
    margin-bottom: 20px;
  }
`;

const Phone = styled(Address)``;

const Email = styled(Address)``;

const ContactForm = styled.form`
  position: relative;
  width: 440px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: white;

  & input,
  & textarea {
    background: white;
    display: block;
    margin: 20px auto;
    width: 100%;
    border: 0;
  }

  & input {
    height: 40px;
    line-height: 40px;
    outline: 0;
    border-bottom: 1px solid rgba(68, 68, 68, 0.3);
    font-size: 1rem;
    color: rgba(68, 68, 68, 0.8);
  }

  & textarea {
    border-bottom: 1px solid rgba(68, 68, 68, 0.3);
    resize: none;
    outline: none;
    font-size: 1rem;
    font-family: lato;
    color: rgba(68, 68, 68, 0.8);
  }

  & button {
    position: absolute;
    display: block;
    height: 40px;
    width: 250px;
    left: 95px;
    border: 0;
    border-radius: 20px;
    bottom: -20px;
    background: #9ed8eb;
    color: white;
    font-size: 1.1rem;
    font-weight: 300;
    outline: none;
  }
`;

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactFormContainer>
        <ContactUs>
          <ContactHeader>
            <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US</h1>
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
        <Phone>
          <i className="fas fa-phone-alt"></i>
          <h3>757 287 1608</h3>
        </Phone>
        <Email>
          <i className="fas fa-envelope"></i>
          <h3>hello@adept.com</h3>
        </Email>
        <ContactForm>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="4" placeholder="Tell us about your project..." />
          <button type="button">SEND</button>
        </ContactForm>
      </ContactFormContainer>
    </ContactContainer>
  );
};

export default ContactSection;
