import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(0, 0, 0, 0.3)`,
      backdropFilter: `blur(10px)`,
      borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
      position: `sticky`,
      top: 0,
      zIndex: 10,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `1000px`, // Match this to your Page/Card width (e.g., 800px or 1000px)
        padding: `10px 20px`,
        display: `grid`,
        gridTemplateColumns: `1fr auto 1fr`, 
        alignItems: `center`,
      }}
    >
      {/* 1. Left Section: Logo forced to the far left */}
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <StaticImage 
            src="../images/logo.avif"
            alt="Logo"
            height={50}
            placeholder="blurred"
            // Remove marginRight if you want it flush against the left edge
            style={{ margin: 0 }} 
          />
        </Link>
      </div>

      {/* 2. Centered Title */}
      <Link
        to="/"
        style={{
          fontSize: `1.5rem`,
          fontWeight: `900`,
          textDecoration: `none`,
          color: `#fff`,
          textTransform: `uppercase`,
          letterSpacing: `2px`,
          textAlign: `center`,
        }}
      >
        {siteTitle}
      </Link>

      {/* 3. Right-aligned Navigation */}
      <nav style={{ display: "flex", gap: "25px", justifyContent: "flex-end" }}>
        <Link to="/about" style={navLinkStyle}>About Us</Link>
        <Link to="/contact" style={navLinkStyle}>Contact</Link>
      </nav>
    </div>
  </header>
)

const navLinkStyle = {
  color: `white`,
  textDecoration: `none`,
  fontSize: `0.85rem`,
  fontWeight: `600`,
  textTransform: `uppercase`,
  letterSpacing: `1px`,
  opacity: 0.8,
  transition: `opacity 0.2s`,
}

export default Header