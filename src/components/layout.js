import React from 'react'
import PropTypes from 'prop-types'
import Gauges from 'gauges-react'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import Footer from './footer/footer'
import Header from './header/header'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #EDF2F4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Layout = ({ children, primary, secondary, footer }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Gauges id="5a88ab800b35912f90000021" />
        <GlobalStyle />
        <link
          rel="stylesheet"
          href="https://fonts.jimstatic.com/css?family=Lobster+Two:400|Open+Sans+Condensed:700|Raleway:300,400,500,600,700"
          as="style"
          onload="this.rel='stylesheet'"
        />
        <Header primary={primary} secondary={secondary} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          {footer && <Footer />}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  Primary: PropTypes.string,
  secondary: PropTypes.string
}

Layout.defaultProps = {
  footer: true,
  primary: 'FaaS',
  secondary: 'Club'
}

export default Layout
