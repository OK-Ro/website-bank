import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = styled.header`
  background-color: #1abc9c;
  padding: 20px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 10px 0;
  }
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

    @media (max-width: 768px) {
      max-width: 30%;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 10px;
  }
`;

const NavMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-right: 20px;

      button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color: #fff;
        transition: color 0.3s ease;

        &:hover {
          color: #fff;
        }
      }
    }

    .dropdown-menu {
      position: relative;

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #16a085;
        min-width: 220px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;
        border-radius: 8px;

        button {
          display: block;
          margin-bottom: 10px;
          background: none;
          border: none;
          color: #fff;
          transition: color 0.3s ease;

          &:hover {
            color: #fff;
          }
        }
      }

      &:hover .dropdown-content {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    ul {
      flex-direction: column;
      align-items: center;
      margin-top: 0px;
      background-color: #1abc9c;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 20px;
      width: 250px;
      height: 82vh;

      li {
        margin: 20px 0;
      }

      .dropdown-menu {
        position: static;

        .dropdown-content {
          display: none;
          position: static;
          background-color: #16a085;
          min-width: 220px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          padding: 10px;
          z-index: 1;
          border-radius: 8px;

          button {
            display: block;
            margin-bottom: 10px;
            background: none;
            border: none;
            color: #fff;
            transition: color 0.3s ease;

            &:hover {
              color: #fff;
            }
          }
        }

        &:hover .dropdown-content {
          display: block;
        }
      }
    }
  }
`;

const NavToggler = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #fff;
    font-size: 35px;
    position: absolute;
    top: 28px;
    right: 20px;
    z-index: 2;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  display: none;

  @media (max-width: 768px) {
    display: inline;
    color: white;
    font-size: 25px;
    position: absolute;
    top: 40px;
    right: 90px;
    cursor: pointer;
    z-index: 2;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("navtogler icon clicked");
  };

  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <img
            src="https://www.pngplay.com/wp-content/uploads/9/WWW-Website-Transparent-File.png"
            alt="Your Platform Name"
          />
        </LogoContainer>
        <SearchIcon icon={faSearch} />
        <NavToggler onClick={toggleMenu}>☰</NavToggler>
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
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;
