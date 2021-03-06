import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { Query } from 'react-apollo'
import { GET_REPOSITORIES } from '../../services/api'
import { Repository } from './components/Repository'
import { Container } from '../../components/Container'

export class Repositories extends React.Component {
  state = {
    login: 'reactjs',
  }

  static propTypes = {
    history: PropTypes.objectOf(PropTypes.shape).isRequired,
  }

  showCommits = repository => {
    const { history } = this.props
    const { login } = this.state
    history.push(`/commits/${repository}/${login}`)
  }

  render() {
    const variables = {
      login: 'reactjs',
      first: 10,
    }
    return (
      <Query query={GET_REPOSITORIES} variables={variables}>
        {({ loading, data }) => {
          if (loading) return <div>carregando...</div>
          const repositories = get(data, 'repositoryOwner.repositories.nodes', [])
          return (
            <Container>
              <h1>Repositories by reactjs organization</h1>
              {repositories.map(repository => (
                <Repository
                  key={repository.name}
                  name={repository.name}
                  description={repository.description}
                  stars={repository.stargazers.totalCount}
                  forks={repository.forks.totalCount}
                  onClickButton={() => this.showCommits(repository.name)}
                />
              ))}
            </Container>
          )
        }}
      </Query>
    )
  }
}
