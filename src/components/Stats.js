import React from 'react'
import styled from 'styled-components'
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const StatsData = [
  {
    icon: <GiEarthAmerica color="#047bf1" />,
    title: "Over 100 Destinations",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: <MdAirplanemodeActive color="#f3a82e" />,
    title: "1 Million Trips Made",
    desc: "Over 1 million trips completed last year",
  },
  {
    icon: <MdTimer color="#f34f2e" />,
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: <FaMoneyCheck color="#3af576" />,
    title: "Best Deals",
    desc: "We offer the best prices",
  },
]

const Stats = () => {
  return (
    <StatsContainer>
        <Heading>
            Why Choose Us?
        </Heading>
        <Wrapper>
            {StatsData.map((item, index) => {
                return (
                    <StatsBox key={ index }>
                        <Icon>{ item.icon }</Icon>
                        <Title>{ item.title }</Title>
                        <Description>{ item.desc }</Description>
                    </StatsBox>
                )
            })}
        </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc( (100vw - 1300px) / 2 );
`

const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
    transition: .4s ease;

    &:hover {
        transform: translateY(-3px);
    }
`

const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`

const Title = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.7rem;
`
const Description = styled.div`

`