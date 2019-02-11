import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Card from '../components/card'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Welcome = styled.p`
  font-weight: 600;
  line-height: 18px;
  font-family: 'Raleway', sans-serif;
  color: #8d99ae;
  letter-spacing: 0.02em;
  font-size: 13px;
  text-align: center;
  max-width: 420px;
  margin: 20px auto 0 auto;

  & > a {
    text-decoration: none;
    color: #8d99ae;
    font-weight: 700;
  }
`

const List = styled.div`
  margin: 50px 0 50px; 0;
`

const IndexPage = ({
  data: {
    allDataYaml: { edges }
  }
}) => (
  <Layout>
    <SEO title="FaaS.club" keywords={[`faas`, `faasclub`, `serverless`, `function as a service`, `lambda`]} />
    <Welcome>Curated list of resources for all things Serverless.</Welcome>
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
