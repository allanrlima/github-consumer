import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  padding: 16px;
  border-bottom: 1px solid #cecece;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Card = ({ children }) => <Container>{children}</Container>

Card.propTypes = {
  children: PropTypes.node.isRequired,
}
