import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = ({ children }) => <Container>{children}</Container>

Header.propTypes = {
  children: PropTypes.node.isRequired,
}
