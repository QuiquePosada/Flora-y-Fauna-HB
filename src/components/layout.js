import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// import Header from "./header"
import './layout.css'
import NavBar from './navbar'
import Footer from './footer'
// import Container from '@material-ui/core/Container'

const sectionData = [
  {
      label: "Nosotros",
      href: "/#aboutUs",
  },
  {
      label: "Menú",
      href: "/404",
  },
//   {
//       label: "Contáctanos",
//       href: "/",
//   },
]

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }        
        }
    `)

    return (
        <>
            <NavBar data={data} headersData={sectionData} />
            <div>
            <main>{children}</main>
            <Footer data={data} sectionData={sectionData} />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
