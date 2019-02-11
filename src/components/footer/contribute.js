import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  font-weight: 600;
  line-height: 18px;
  font-family: 'Raleway', sans-serif;
  color: #8d99ae;
  letter-spacing: 0.02em;
  font-size: 13px;
  max-width: 240px;
  margin: 0 auto;

  & > a {
    text-decoration: none;
    color: #8d99ae;
    font-weight: 700;
  }
`

export default () => (
  <Wrapper>
    Create a{' '}
    <a href="https://github.com/sbstjn/faas.club/blob/master/data.yml" target="_blank">
      PullRequest on GitHub
    </a>{' '}
    to add something to the list.
  </Wrapper>
)
