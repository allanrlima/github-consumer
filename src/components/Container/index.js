import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  display: flex;
  flex-direction: column;
`

export const Container = ({ children }) => <ContainerDiv>{children}</ContainerDiv>
