import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../services/styles'

const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding: 16;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  ${device.desktop`
    width: 980px;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    padding-left: 0px;
    padding-right: 0px;
  `}
`

export const Header = ({ children }) => <Container>{children}</Container>

Header.propTypes = {
  children: PropTypes.node.isRequired,
}
