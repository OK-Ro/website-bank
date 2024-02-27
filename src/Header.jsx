import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = styled.header`
  background-color: #2c3e50;
  padding: 20px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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
      max-width: 40%;
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
    padding: 20px;
  }
`;
const SearchSection = styled.div`
  display: flex;
  align-items: center;
  input {
    padding: 8px;
    margin-right: 10px;
    border-radius: 4px;
    border: none;
  }
  button {
    padding: 8px 15px;
    border: none;
    background-color: #4caf50;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const NavToggler = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #ecf0f1;
    font-size: 40px;
    position: relative;
    top: -90px;
    right: 2px;
  }
`;
const SearchIcon = styled(FontAwesomeIcon)`
  display: none;

  @media (max-width: 768px) {
    display: inline;
    color: white;
    font-size: 30px;
    margin-right: 10px;
    position: absolute;
    top: 60px;
    right: 90px;
    cursor: pointer;
  }
`;
const NavMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: ${({ open }) => (open ? "0" : "-100%")};
      background-color: #333;
      width: 100%;
      transition: left 0.3s ease-in-out;
      li {
        padding: 10px;
        border-bottom: 1px solid #555;
        a {
          color: #fff;
          text-decoration: none;
          &:hover {
            color: #4caf50;
          }
        }
      }
    }
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <NavToggler onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </NavToggler>
        <NavMenu open={menuOpen}>
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
          <input type="text" placeholder=""></input>
          <button type="submit">Search</button>
        </SearchSection>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;
