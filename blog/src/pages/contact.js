import * as React from "react"
import Layout from "../components/layout"
import { graphql} from "gatsby"

const ContactPage = ({ data }) => {
  const { address } = data.site.siteMetadata.contact
  return (
    <Layout>
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "60px 20px",
        color: "white" 
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "3rem" }}>
          Contact Us
        </h1>

        <div style={{ 
          background: "#ffffff", 
          borderRadius: "20px", 
          padding: "40px", 
          color: "#222", 
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          display: "grid",
          gap: "30px"
        }}>
          <h2 style={{ textAlign: "center", margin: 0, color: "#000", borderBottom: "2px solid #eee", paddingBottom: "15px" }}>
            The Sanctuary Pet Rescue
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <strong style={labelStyle}>Main Phone</strong>
              <p style={dataStyle}>(123) 456-7890</p>
            </div>

            <div>
              <strong style={labelStyle}>Email</strong>
              <p style={dataStyle}>Fuzz@sanctuary.com</p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #eee", paddingTop: "25px" }}>
            <strong style={labelStyle}>Mailing Address</strong>
            <p style={{ ...dataStyle, marginTop: "10px", lineHeight: "1.6" }}>
              {`${address} `}
            </p>
          </div>

          <button style={{
            marginTop: "10px",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#222",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#444"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#222"}
          >
            Send Us a Message
          </button>
        </div>
      </div>
    </Layout>
  )
}

const labelStyle = {
  display: "block",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  color: "#888",
  letterSpacing: "1px",
  marginBottom: "5px"
}

const dataStyle = {
  fontSize: "1.2rem",
  margin: 0,
  fontWeight: "500"
}
export default ContactPage
export const query = graphql`
    query{
    site{
        siteMetadata{
        contact{
        name
        company
        address
    }
    }
        }
        }`