import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Card from '../components/card'
import Layout from '../components/layout'
import List from '../components/list/list'
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

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="FaaS.club" keywords={[`faas`, `faasclub`, `serverless`, `function as a service`, `lambda`]} />
        <Welcome>Curated list of resources for all things Serverless.</Welcome>
        <List items={this.props.data.allDataYaml.edges} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allDataYaml(sort: { order: ASC, fields: [name] }) {
      edges {
        node {
          name
          info
          github
          type
          url
        }
      }
    }
  }
`
