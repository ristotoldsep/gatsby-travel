import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero
      heading="Unreal Destinations"
      desc="Out of this world"
      btnText="Travel Now"
    />
    <Trips sectionTitle="Our Favourite Destinations" />
    <Testimonials sectionTitle="Testimonials" desc="What people are Saying" />
    <Stats sectionTitle="Why Choose Us?" />
    <Email />
  </Layout>
)


export default IndexPage
