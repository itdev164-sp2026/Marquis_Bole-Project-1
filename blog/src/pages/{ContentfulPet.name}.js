import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const PetTemplate = ({ data }) => {
  const pet = data.contentfulPet
  const [currentIndex, setCurrentIndex] = useState(0)
  //pet detail page functions and details
  if (!pet) return null
  const isAvailable = pet.adoptionStatus
  const images = pet.image || []

  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  return (
    <Layout>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", marginBottom: "20px", display: "inline-block" }}>
          ← Back to All Animals
        </Link>

        <div style={{ 
          background: "#ffffff", 
          borderRadius: "20px", 
          overflow: "hidden", 
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          color: "#222"
        }}>
          
          {/* Slide*/}
          <div style={{ position: "relative", height: "450px", background: "#000" }}>
            {images.length > 0 && (
              <GatsbyImage 
                image={getImage(images[currentIndex])} 
                alt={`${pet.name} - photo ${currentIndex + 1}`} 
                style={{ width: "100%", height: "450px" }}
                imgStyle={{ objectFit: "cover" }}
              />
            )}
            {images.length > 1 && (
              <>
                <button onClick={prevSlide} style={arrowStyle({ left: "10px" })}>‹</button>
                <button onClick={nextSlide} style={arrowStyle({ right: "10px" })}>›</button>
                <div style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8rem"
                }}>
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          <div style={{ padding: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "20px" }}>
              <h1 style={{ margin: 0, fontSize: "2.5rem" }}>{pet.name}</h1>
              
              <div style={{ 
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                backgroundColor: isAvailable ? "#d4edda" : "#f8d7da",
                color: isAvailable ? "#155724" : "#721c24",
                border: `1px solid ${isAvailable ? "#c3e6cb" : "#f5c6cb"}`
              }}>
                ● {isAvailable ? "Available for Adoption" : "Already Adopted"}
              </div>
            </div>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "20px", 
              padding: "20px", 
              background: "#f8f9fa", 
              borderRadius: "12px",
              marginBottom: "30px" 
            }}>
              <p style={{ margin: 0 }}><strong>Breed:</strong> {pet.breed}</p>
              <p style={{ margin: 0 }}><strong>Age/Size:</strong> {pet.agesize || "Contact for info"}</p>
            </div>

            <div style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#444" }}>
              {pet.description && documentToReactComponents(JSON.parse(pet.description.raw))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const arrowStyle = (position) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255, 255, 255, 0.7)",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "24px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  ...position
})

export default PetTemplate

export const query = graphql`
  query($id: String) {
    contentfulPet(id: { eq: $id }) {
      name
      breed
      agesize
      adoptionStatus
      image {
        gatsbyImageData(width: 1000, placeholder: BLURRED)
      }
      description {
        raw
      }
    }
  }
`