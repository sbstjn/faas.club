import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  display: block;
  padding-bottom: 5px;

  & > a {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    line-height: 12px;
    text-decoration: none;
    color: #8d99ae;
    letter-spacing: 0.02em;
    font-size: 13px;
  }
`

export default () => (
  <Wrapper>
    <a href="https://sbstjn.com">sbstjn.com</a>
  </Wrapper>
)
