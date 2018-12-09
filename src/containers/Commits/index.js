import React from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import { GET_COMMITS_FROM_REPOSITORY } from '../../services/api'
import { Card } from '../../components/Card/index'
import { Container } from '../../components/Container'

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
`

const Description = styled.div`
  font-size: 14px;
  color: #586069;
  padding-top: 8px;
`

export const Commits = ({ match }) => {
  const { name } = match.params
  const { owner } = match.params

  const variables = {
    name,
    owner,
  }

  return (
    <Query query={GET_COMMITS_FROM_REPOSITORY} variables={variables}>
      {({ loading, data }) => {
        if (loading) return <div>carregando...</div>
        const commits = get(data, 'repository.ref.target.history.edges', [])
        return (
          <Container>
            {commits.map(commit => {
              const { node } = commit
              const { author } = node
              return (
                <Card>
                  <div>
                    <Title>{node.messageHeadline}</Title>
                    <Description>{`Author: ${author.name}`}</Description>
                  </div>
                </Card>
              )
            })}
          </Container>
        )
      }}
    </Query>
  )
}
