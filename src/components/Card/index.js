import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../services/styles'

const Container = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  ${device.desktop`
    flex-direction: row;
  `}
  overflow: hidden;
  border-radius: 4px;
  min-width: 275px;
  margin-top: 16px;
  background-color: #fff;
  box-sizing: border-box;
`

export const Card = ({ children }) => <Container>{children}</Container>

Card.propTypes = {
  children: PropTypes.node.isRequired,
}
