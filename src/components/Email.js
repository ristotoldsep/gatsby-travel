import React from 'react'
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "./Button"
import Img from "../assets/images/email2.jpg"



const Email = () => {

  const data = useStaticQuery(graphql`
    query emailBgQuery {
      file: allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["email1", "email2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const image = getImage(data.file.edges[0].node)
  

  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>
          Sign up for your newsletter below to get $100 off your first trip!
        </p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              css={`
                height: 48px;

                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }
                @media screen and (max-width: 400px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
            >
              Sign Up
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
      {/* <GatsbyImage image={image} alt="EmailBgImage" /> */}
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${Img}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

    h1 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: clamp(1rem, 5vw, 3rem);
      padding: 0 1rem;
    }

    p {
      text-align: center;
      font-size: clamp(1rem, 2.5vw, 1.5rem);
      padding: 0 1rem;
      margin-bottom: 2rem;
    }

    form {
      z-index: 10;
    }
`
const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
    }
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;

      input {
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
      }
    }
  
`