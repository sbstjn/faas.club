import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import Card from '../card'
import Filter from './filter'

const Cards = styled.div`
  margin: 30px 0 50px; 0;
`

export default class List extends React.Component {
  constructor(props) {
    super(props)

    const types = {}
    props.items.forEach(edge => {
      types[edge.node.type] = true
    })

    this.state = {
      items: props.items,
      disabled: [],
      types
    }
  }

  toggle(type) {
    this.setState({
      types: {
        ...this.state.types,
        [type]: !this.state.types[type]
      }
    })
  }

  render() {
    const { types, items } = this.state

    return (
      <>
        <Filter types={types} toggle={type => this.toggle(type)} />
        <Cards>{items.map((edge, key) => types[edge.node.type] && <Card key={key} {...edge.node} />)}</Cards>
      </>
    )
  }
}

List.propTypes = {
  items: PropTypes.array
}
