import React from "react";
import styled, { keyframes } from "styled-components";

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
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

const NavToggler = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #ecf0f1;
    font-size: 44px;
  }
`;

const NavMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-right: 50px;

      button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color: #ecf0f1;
        transition: color 0.3s ease;

        &:hover {
          color: #3498db;
        }
      }
    }

    .dropdown-menu {
      position: relative;

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 220px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        padding: 10px;
        z-index: 1;
        border-radius: 8px;

        button {
          display: block;
          margin-bottom: 10px;
          background: none;
          border: none;
          color: #333;
          transition: color 0.3s ease;

          &:hover {
            color: #007bff;
          }
        }
      }

      &:hover .dropdown-content {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      li {
        margin: 10px 0;
      }

      .dropdown-menu {
        position: static;

        .dropdown-content {
          display: none;
          position: static;
          background-color: #f9f9f9;
          min-width: 220px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          padding: 10px;
          z-index: 1;
          border-radius: 8px;

          button {
            display: block;
            margin-bottom: 10px;
            background: none;
            border: none;
            color: #333;
            transition: color 0.3s ease;

            &:hover {
              color: #007bff;
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

const SearchSection = styled.div`
  display: flex;

  input[type="text"] {
    padding: 8px;
    border-radius: 20px 0 20px 2px;
    border: 1px solid #ccc;
    border-right: none;
    width: 300px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
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
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <img
            src="https://www.pngplay.com/wp-content/uploads/9/WWW-Website-Transparent-File.png"
            alt="Your Platform Name"
          />
        </LogoContainer>
        <NavToggler>☰</NavToggler>
        <NavMenu>
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
          <input type="text" placeholder></input>
          <button type="submit">Search</button>
        </SearchSection>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;
