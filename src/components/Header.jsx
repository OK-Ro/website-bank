import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
  background-color: #1abc9c;
  padding: 40px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

// const bounceAnimation = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-10px);
//   }
// `;

const LogoContainer = styled.div`
  position: relative;
  z-index: 2;

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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;

    ul {
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 80%;
      max-width: 300px;
      height: 100%;
      background-color: #1abc9c;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      border-radius: 0 0 10px 10px; /* Rounded corners only at the bottom */
      overflow-y: auto;
      padding: 20px;
      padding-top: 50px;
      z-index: 999;

      li {
        font-size: 30px;
        margin: 60px 0;
        text-align: center;
      }

      .dropdown-menu {
        position: relative;

        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
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
    top: 20px;
    right: 20px;
    z-index: 2;
  }
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 25px;
  cursor: pointer;
  z-index: 1000; /* Ensure it's above other elements */
  background: red;
  border-radius: 50%;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <img
            src="https://logos-download.com/wp-content/uploads/2019/11/Web_Bank_Logo.png"
            alt="Your Platform Name"
          />
        </LogoContainer>

        <NavToggler onClick={toggleMenu}>☰</NavToggler>
        {isOpen && <CloseIcon onClick={handleClose}>×</CloseIcon>}
        <NavMenu ref={menuRef} isOpen={isOpen}>
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
