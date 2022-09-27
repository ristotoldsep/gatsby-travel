import React from 'react'
import styled from "styled-components"
import { Button } from './Button'
import Video from "../assets/videos/herovideo.mp4"

const Hero = ({heading, desc, btnText}) => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <h1 data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
            Test
          </h1>
          <HeroH1
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {heading}
          </HeroH1>
          <HeroP data-sal="slide-up" data-sal-delay="300">
            {desc}
          </HeroP>
          <Button
            primary="true"
            big="true"
            round="true"
            to="/trips"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            {btnText}
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero


const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%);
  }
` 

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
` 

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
` 

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2 );
` 

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
` 

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem); //Makes fonts responsive...
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
` 

const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 2rem); //Makes fonts responsive...
  margin-bottom: 2rem;
  font-weight: 400;
` 
