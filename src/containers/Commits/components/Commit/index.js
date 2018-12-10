import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card } from '../../../../components/Card'

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
`

const Description = styled.div`
  font-size: 14px;
  color: #586069;
  padding-top: 8px;
`

export const Commit = ({ title, name }) => (
  <Card>
    <div>
      <Title>{title}</Title>
      <Description>{`Author: ${name}`}</Description>
    </div>
  </Card>
)

Commit.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
