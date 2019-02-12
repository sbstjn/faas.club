import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const Tag = styled.span`
  display: inline-block;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #00aa75;
  background-color: #ebfff9;
  text-transform: uppercase;
  border: 1px solid #00aa75;
  padding: 4px 8px 3px 8px;
  letter-spacing: 0.02em;
  border-radius: 5px;
  position: relative;
  top: 1px;
  cursor: pointer;

  ${props =>
    !props.active &&
    css`
      color: #999;
      background-color: #eee;
      border: 1px solid #ddd;
    `}
`

const FilterOption = styled.li`
  display: inline-block;
  list-style-type: none;
  margin: 0 5px;
`

const FilterList = styled.ul`
  margin-top: 20px;
  text-align: center;
`

export default class Filter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FilterList>
        {Object.keys(this.props.types).map(type => (
          <FilterOption key={type}>
            <Tag active={this.props.types[type]} onClick={() => this.props.toggle(type)}>
              {type}
            </Tag>
          </FilterOption>
        ))}
      </FilterList>
    )
  }
}

Filter.propTypes = {
  types: PropTypes.object,
  toggle: PropTypes.func
}
