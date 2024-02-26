import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const HeaderSection = styled.header`
  background-color: #2c3e50;
  padding: 20px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const LogoContainer = styled.div`
  position: relative;
  z-index: 2;
  animation: ${bounceAnimation} 1s ease infinite;

  img {
    max-width: 150px;
    height: auto;
    display: block;
  }
`;

const SearchSection = styled.div`
  display: flex;

  input[type="text"] {
    padding: 8px;
    border-radius: 20px 0 20px 2px;
    border: 1px solid #ccc;
    border-right: none;
    width: 300px;
  }

  button[type="submit"] {
    background-color: #74ebd5;
    background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);

    color: #fff;
    border: none;
    padding: 8px 36px;
    border-radius: 0 4px 20px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavMenu = styled.nav`
    display: ${(props) => (props.isOpen || !isMobile ? "block" : "none")};

    @media (max-width: 768px) {
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: #2c3e50;
      padding: 20px;
    }
  `;

  const NavToggle = styled.input.attrs({ type: "checkbox", id: "nav" })`
    display: none;

    @media (max-width: 768px) {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 3;

      &:checked + ${NavMenu} {
        display: block;
      }
    }
  `;

  const NavLabel = styled.label.attrs({ htmlFor: "nav" })`
    display: none;

    @media (max-width: 768px) {
      display: block;
      position: absolute;
      top: 28px;
      left: 30px;
      width: 40px;
      height: 4px;
      background-color: #fff;
      border-radius: 4px;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: #fff;
        border-radius: 4px;
        transition: transform 0.8s;
      }

      &:before {
        top: 10px;
      }

      &:after {
        top: 20px;
      }

      &:hover {
        cursor: pointer;
      }

      &:hover:before,
      &:hover::after {
        transform: ${(props) =>
          props.isOpen ? "rotate(-45deg)" : "rotate(0)"};
      }

      &:hover:before {
        top: ${(props) => (props.isOpen ? "15px" : "10px")};
      }

      &:hover::after {
        top: ${(props) => (props.isOpen ? "15px" : "20px")};
      }

      &:hover + ${NavToggle} {
        display: block;
      }

      &:hover + ${NavToggle}:checked {
        display: none;
      }

      &:hover + ${NavToggle} + ${NavMenu} {
        display: block;
      }
    }
  `;

  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <img
            src="https://www.pngplay.com/wp-content/uploads/9/WWW-Website-Transparent-File.png"
            alt="Your Platform Name"
          />
        </LogoContainer>
        {isMobile && (
          <>
            <NavToggle checked={isOpen} onChange={toggleMenu} />
            <NavLabel isOpen={isOpen} htmlFor="nav" />
          </>
        )}
        <NavMenu isOpen={isOpen}>
          <ul>
            <li>
              <button onClick={() => (window.location.href = "#home")}>
                Home
              </button>
            </li>

            <li className="dropdown-menu">
              <button className="dropbtn">Templates</button>
              <div className="dropdown-content">
                <button onClick={() => (window.location.href = "#business")}>
                  Business & Corporate
                </button>
                <button onClick={() => (window.location.href = "#portfolio")}>
                  Portfolio & Creative
                </button>
                <button onClick={() => (window.location.href = "#ecommerce")}>
                  E-commerce & Online Store
                </button>
                <button onClick={() => (window.location.href = "#blog")}>
                  Blog & Magazine
                </button>
                <button onClick={() => (window.location.href = "#personal")}>
                  Personal Website
                </button>
                <button onClick={() => (window.location.href = "#photography")}>
                  Photography & Art
                </button>
                <button onClick={() => (window.location.href = "#restaurant")}>
                  Restaurant & Food
                </button>
                <button onClick={() => (window.location.href = "#travel")}>
                  Travel & Tourism
                </button>
                <button onClick={() => (window.location.href = "#health")}>
                  Health & Fitness
                </button>
                <button onClick={() => (window.location.href = "#education")}>
                  Education & Learning
                </button>
              </div>
            </li>
            <li>
              <button onClick={() => (window.location.href = "#services")}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => (window.location.href = "#about")}>
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => (window.location.href = "#contact")}>
                Contact
              </button>
            </li>
          </ul>
        </NavMenu>
        <SearchSection>
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </SearchSection>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;
