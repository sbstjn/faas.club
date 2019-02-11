import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Logo from './logo'

const Wrapper = styled.header`
  text-align: center;
  overflow-x: hidden;
`

const Header = props => (
  <Wrapper>
    <Logo {...props} />
  </Wrapper>
)

Header.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string
}

export default Header
