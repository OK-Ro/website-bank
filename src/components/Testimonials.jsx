import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TestimonalContainer = styled.Container`
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

const Main = styled.main`
  width: 800px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.6rem);
  color: #fff;
  margin-bottom: 70px;
`;

const Slider = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideRow = styled.div`
  display: flex;
  width: 3200px;
  transition: 0.5s;
`;

const SlideCol = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
`;

const Hero = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

const HeroImage = styled.img`
  height: 100%;
  border-radius: 10px;
  width: 320px;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 520px;
  height: 270px;
  color: #4d4352;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  padding: 45px;
  z-index: 2;
  user-select: none;
`;

const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 35px;
  color: #4d4352;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const Button = styled.span`
  display: inline-block;
  height: 15px;
  width: 15px;
  margin: 4px;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &.active {
    width: 30px;
  }
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    const slideRow = document.getElementById("slide-row");
    const main = document.querySelector("main");

    function updateSlide() {
      const mainWidth = main.offsetWidth;
      const translateValue = currentIndex * -mainWidth;
      slideRow.style.transform = `translateX(${translateValue}px)`;

      btns.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentIndex);
      });
    }

    btns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        setCurrentIndex(index);
        updateSlide();
      });
    });

    window.addEventListener("resize", () => {
      updateSlide();
    });

    return () => {
      window.removeEventListener("resize", () => {
        updateSlide();
      });
    };
  }, [currentIndex]);

  return (
    <Container>
      <Main>
        <Heading>Testimonials</Heading>
        <Slider>
          <SlideRow id="slide-row">
            <SlideCol>
              <Content>
                <Text>
                  Zen Doan is a business analyst, entrepreneur, and media
                  proprietor, and investor. She is also known as the
                  best-selling book author.
                </Text>
                <Heading2>Zen</Heading2>
                <Text>Author</Text>
              </Content>
              <Hero>
                <HeroImage
                  src="https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg"
                  alt="avatar"
                />
              </Hero>
            </SlideCol>
            <SlideCol>
              <Content>
                <Text>
                  Jonathan Koletic is an American internet entrepreneur and
                  media proprietor, and investor. He is the founder of the
                  multi-national technology company Treymont.
                </Text>
                <Heading2>Jonathan</Heading2>
                <Text>Treymont Inc.</Text>
              </Content>
              <Hero>
                <HeroImage
                  src="https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg"
                  alt="avatar"
                />
              </Hero>
            </SlideCol>
            <SlideCol>
              <Content>
                <Text>
                  Charlie Green is a European entrepreneur and media consultant,
                  and investor. He is the founder of the Hallmark Inc.
                </Text>
                <Heading2>Charlie</Heading2>
                <Text>Hallmark Inc.</Text>
              </Content>
              <Hero>
                <HeroImage
                  src="https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg"
                  alt="avatar"
                />
              </Hero>
            </SlideCol>
            <SlideCol>
              <Content>
                <Text>
                  Sarah Dam is an American internet entrepreneur and media
                  proprietor, and investor. She is the founder of the
                  multi-national technology company Zara.
                </Text>
                <Heading2>Sarah</Heading2>
                <Text>Zara Inc.</Text>
              </Content>
              <Hero>
                <HeroImage
                  src="https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3"
                  alt="avatar"
                />
              </Hero>
            </SlideCol>
          </SlideRow>
        </Slider>
        <Indicator>
          <Button
            className={currentIndex === 0 ? "btn active" : "btn"}
          ></Button>
          <Button
            className={currentIndex === 1 ? "btn active" : "btn"}
          ></Button>
          <Button
            className={currentIndex === 2 ? "btn active" : "btn"}
          ></Button>
          <Button
            className={currentIndex === 3 ? "btn active" : "btn"}
          ></Button>
        </Indicator>
      </Main>
    </Container>
  );
};

export default Testimonials;
