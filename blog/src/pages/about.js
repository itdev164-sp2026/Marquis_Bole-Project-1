import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = ({ data }) => {
  const { name, company } = data.site.siteMetadata.contact

  return (
    <Layout>
      <Seo title="About Us" />
      
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px" }}>
        <h1 style={{ textAlign: "center", color: "white", marginBottom: "40px", fontSize: "3rem" }}>
          About Us
        </h1>

        <div style={{ 
          background: "#ffffff", 
          borderRadius: "20px", 
          padding: "50px", 
          color: "#222", 
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          lineHeight: "1.8",
          fontSize: "1.1rem"
        }}>
          <p>
            <strong>{company}</strong> was created by <strong>{name}</strong> in 2026.
          </p>
          
          <p>
            Here at {company}, we take pride in finding our furry friends a permanent spot 
            in your home. We believe every animal deserves a second chance and a 
            loving environment to thrive in. If you found someone who peaked your interest,
            please reach out to us through our contact page.
          </p>

          <div style={{ 
            marginTop: "30px", 
            padding: "20px", 
            background: "#f8f9fa", 
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px"
          }}>
            <StaticImage 
              src="../images/logo.avif" 
              width={200} 
              quality={100} 
              formats={["auto", "webp", "avif"]} 
              alt="Logo" 
            />
          </div>

          <Link to="/" style={{ 
            display: "inline-block", 
            marginTop: "40px", 
            color: "#222", 
            fontWeight: "bold",
            textDecoration: "underline" 
          }}>
            ← Return Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`