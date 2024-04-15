import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: scale(${({ isVisible }) => (isVisible ? 1 : 0.9)});
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const ScrollEffectContainer = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const distanceFromTop = containerRef.current.offsetTop - scrollTop;

      if (distanceFromTop < windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container ref={containerRef} isVisible={isVisible}>
      {children}
    </Container>
  );
};

export default ScrollEffectContainer;
