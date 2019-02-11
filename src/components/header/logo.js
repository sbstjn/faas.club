import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  text-align: center;
  line-height: 45px;
  font-size: 36px;
  margin-top: 80px;
  transform: scaleX(1) scaleY(1) scaleZ(1) skewX(-20deg);
`

const LogoFaaS = styled.span`
  color: #00c387;
  background-color: #fff;
  display: inline-block;
  padding: 1px 13px 0 12px;
  font-weight: 700;
  font-family: 'Open Sans Condensed';
`

const LogoCLUB = styled.span`
  background-color: #00c387;
  padding: 1px 15px 0 14px;
  display: inline-block;
  color: #fff;
  font-weight: 400;
  font-family: 'Lobster Two';
  text-transform: lowercase;
`

const Logo = ({ primary, secondary }) => (
  <Wrapper>
    <LogoFaaS>{primary}</LogoFaaS>
    <LogoCLUB>{secondary}</LogoCLUB>
  </Wrapper>
)

Logo.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string
}

export default Logo
