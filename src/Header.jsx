import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  img {
    max-width: 150px;
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
        font-size: 16px;
        color: #333;
        transition: color 0.3s ease;

        &:hover {
          color: #007bff;
        }
      }
    }

    .dropdown-menu {
      position: relative;

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #fff;
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
    padding: 8px;
    border-radius: 4px 0 0 4px;
    border: 1px solid #ccc;
    border-right: none;
    width: 200px;
  }

  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
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
