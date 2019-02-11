import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const PRLink = styled.a`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  text-decoration: none;
  color: #8d99ae;
  margin: 0;
`

const Wrapper = styled.div`
  background-color: white;
  padding: 10px 12px;
  box-sizing: border-box;
  border-radius: 5px;
  max-width: 470px;
  margin: 0 auto 10px auto;
`

const Headline = styled.h3`
  margin: 2px 0 8px 0;
  color: #00aa75;
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
`

const Description = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #8d99ae;
  margin: 0 0 12px 0;
`

const Tag = styled.span`
  display: inline-block;
  float: right;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  color: #00aa75;
  background-color: #ebfff9;
  text-transform: uppercase;
  border: 1px solid #00aa75;
  padding: 4px 8px 3px 8px;
  letter-spacing: 0.02em;
  border-radius: 5px;
`

const Card = props => (
  <Wrapper>
    <Tag>{props.type}</Tag>
    <Headline>{props.name}</Headline>
    <Description>{props.info}</Description>
    <PRLink href={props.github} target="_blank">
      View on GitHub
    </PRLink>
  </Wrapper>
)

Card.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  info: PropTypes.string,
  github: PropTypes.string
}

export default Card