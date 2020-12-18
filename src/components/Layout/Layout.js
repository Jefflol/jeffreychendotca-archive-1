import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
// import Header from "./Header"
import "./Layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Navbar />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/* <footer style={{
          marginTop: `2rem`
        }}>
          <small style={{
            fontSize: `0.8rem`
          }}>© 2020-present Jeffrey Chen. All Rights Reserved.</small>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
