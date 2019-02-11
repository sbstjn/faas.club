import React from 'react'
import styled from 'styled-components'

import Credits from './credits'
import Contribute from './contribute'
import Hamburg from './hamburg'

const Wrapper = styled.footer`
  text-align: center;
  padding-bottom: 60px;
`

export default () => (
  <Wrapper>
    <Contribute />
    <Hamburg />
    <Credits />
  </Wrapper>
)
