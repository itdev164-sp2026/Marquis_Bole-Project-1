import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Particles from "../components/Particles"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1,
        backgroundColor: '#ff8040' 
      }}>
        <Particles
          particleCount={460}
          particleSpread={6}
          speed={0.03}
          particleColors={["#ffffff","#ffffff","#ffffff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={120}
          sizeRandomness={1.7}
          cameraDistance={21}
          disableRotation={false}
        />
      </div>

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          position: `relative`,
          zIndex: 1,
          color: `white`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            opacity: 0.7,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com" style={{ color: `inherit` }}>Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout