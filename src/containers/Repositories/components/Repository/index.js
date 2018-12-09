import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card } from '../../../../components/Card/index'
import { Button } from '../../../../components/Button'

const Title = styled.a`
  font-size: 20px;
  font-weight: 600;
`

const Description = styled.div`
  font-size: 14px;
  color: #586069;
  padding-top: 8px;
`

const Footer = styled.div`
  padding-top: 8px;
`

const FooterText = styled.div`
  padding-top: 8px;
  font-size: 14px;
`

export const Repository = ({ name, description, stars, forks, onClickButton }) => (
  <Card>
    <div>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Footer>
        <FooterText>{`${stars} stars`}</FooterText>
        <FooterText>{`${forks} forks`}</FooterText>
      </Footer>
    </div>
    <div>
      <Button title="Show commits" onClick={onClickButton} />
    </div>
  </Card>
)

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
}

Repository.defaultProps = {
  description: '',
}