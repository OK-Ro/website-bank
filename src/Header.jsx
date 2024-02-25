import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
  background-color: #0a192f;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  img {
    max-width: 200px;
    height: auto;
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
        font-size: 18px;
        color: #fff;
        font-family: "Montserrat", sans-serif;
        transition: color 0.3s ease;

        &:hover {
          color: #64ffda;
        }
      }
    }

    .dropdown-menu {
      position: relative;

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #0a192f;
        min-width: 200px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 10px;
        z-index: 1;

        button {
          display: block;
          margin-bottom: 10px;
        }
      }

      &:hover .dropdown-content {
        display: block;
      }
    }
  }
`;

const SearchSection = styled.div`
  display: flex;

  input[type="text"] {
    padding: 10px;
    border-radius: 20px 0 0 20px;
    border: none;
    width: 300px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
  }

  button[type="submit"] {
    background-color: #64ffda;
    color: #0a192f;
    border: none;
    padding: 10px 20px;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #00bfa6;
    }
  }
`;

function Header() {
  return (
    <HeaderSection>
      <HeaderContainer>
        {/* Logo */}
        <LogoContainer>
          <img
            src="https://logos-download.com/wp-content/uploads/2019/11/Web_Bank_Logo.png"
            alt="Your Platform Name"
          />
        </LogoContainer>
        {/* Navigation Menu */}
        <NavMenu>
          <ul>
            <li>
              <button>Home</button>
            </li>
            {/* Dropdown Menu for Templates */}
            <li className="dropdown-menu">
              <button className="dropbtn">Templates</button>
              <div className="dropdown-content">
                <button>Business & Corporate</button>
                <button>Portfolio & Creative</button>
                <button>E-commerce & Online Store</button>
                <button>Blog & Magazine</button>
                <button>Personal Website</button>
                <button>Photography & Art</button>
                <button>Restaurant & Food</button>
                <button>Travel & Tourism</button>
                <button>Health & Fitness</button>
                <button>Education & Learning</button>
              </div>
            </li>
            <li>
              <button>Services</button>
            </li>
            <li>
              <button>About Us</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </NavMenu>
        {/* Search Bar */}
        <SearchSection>
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </SearchSection>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;
