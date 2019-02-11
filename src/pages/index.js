import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Card from '../components/card'
import Layout from '../components/layout'
import SEO from '../components/seo'

const List = styled.div`
  margin: 50px 0 50px; 0;
`

const IndexPage = ({
  data: {
    allDataYaml: { edges }
  }
}) => (
  <Layout>
    <SEO title="FaaS.CLUB" keywords={[`faas`, `faasclub`, `serverless`, `function as a service`, `lambda`]} />

    <List>
      {edges.map(edge => (
        <Card {...edge.node} />
      ))}
    </List>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allDataYaml(sort: { order: ASC, fields: [name] }) {
      edges {
        node {
          name
          info
          github
          type
        }
      }
    }
  }
`
