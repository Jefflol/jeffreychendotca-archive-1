import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
// import Header from "./Header"
import "./Layout.css"
import styles from "./Layout.module.css";

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
    <div className={styles.container}>
      <Navbar />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className={styles.layout}>
        <main>{children}</main>
        {/* <footer style={{
          marginTop: `2rem`
        }}>
          <small style={{
            fontSize: `0.8rem`
          }}>© 2020-present Jeffrey Chen. All Rights Reserved.</small>
        </footer> */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
