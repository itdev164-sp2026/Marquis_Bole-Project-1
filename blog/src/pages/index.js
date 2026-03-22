import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const allPets = data.allContentfulPet.nodes
  const [category, setCategory] = useState("All")
  const filteredPets = allPets.filter(pet =>
    category === "All" ? true : pet.species === category
  )

  return (
    <Layout>
      <h1 style={{
        textAlign: "center"
      }}>Our Animals</h1>
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "30px",
          justifyContent: "center",
        }}
      >
        {["All", "Dog", "Cat"].map(type => (
          <button
            key={type}
            onClick={() => setCategory(type)}
            style={{
              padding: "10px 24px",
              borderRadius: "40px",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              fontWeight: "600",
              //button HL
              backgroundColor: category === type ? "#fff" : "rgba(255,255,255,0.1)",
              color: category === type ? "#000" : "#fff",
              transition: "all 0.2s ease-in-out",
              backdropFilter: "blur(5px)",
            }}
          >
            {type === "All" ? "View All" : `${type}s`}
          </button>
        ))}
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "25px",}}> 
        {/*Pet Cards*/}
        {filteredPets.map(pet => {
          const firstImage = getImage(pet.image?.[0])
          const statusText = pet.adoptionStatus ? "Available" : "Adopted"

          return (
            <Link
              to={`/${pet.name.toLowerCase()}`}
              key={pet.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  background: "#ffffff",
                  color: "#222",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s",
                }}
              >
                {firstImage && (
                  <GatsbyImage
                    image={firstImage}
                    alt={pet.name}
                    style={{ borderRadius: "8px", marginBottom: "15px" }}
                  />
                )}

                <h2 style={{ margin: "0 0 10px 0", fontSize: "1.8rem" }}>{pet.name}</h2>

                <div style={{ marginBottom: "15px", fontSize: "0.95rem" }}>
                  <p style={{ margin: "4px 0" }}>
                    <strong>Breed:</strong> {pet.breed}
                  </p>
                  {/*Age/Size*/}
                  <p style={{ margin: "4px 0" }}>
                    <strong>Age/Size:</strong> {pet.agesize || "Contact for details"}
                  </p>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    backgroundColor: pet.adoptionStatus ? "#d4edda" : "#f8d7da",
                    color: pet.adoptionStatus ? "#155724" : "#721c24",
                    border: `1px solid ${pet.adoptionStatus ? "#c3e6cb" : "#f5c6cb"}`,
                  }}
                >
                  ● {statusText}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulPet {
      nodes {
        id
        name
        species
        breed
        agesize
        adoptionStatus
        image {
          gatsbyImageData(width: 500, placeholder: BLURRED)
        }
      }
    }
  }
`