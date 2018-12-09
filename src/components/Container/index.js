import React from 'react'
import styled from 'styled-components'
import { device } from '../../services/styles'

const ContainerDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  ${device.desktop`
    width: 980px;
  `}
`

export const Container = ({ children }) => <ContainerDiv>{children}</ContainerDiv>
