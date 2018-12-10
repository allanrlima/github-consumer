import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { graphql, compose } from 'react-apollo'
import { GET_REPOSITORIES } from '../../services/api'
import { Repository } from './components/Repository'
import { Container } from '../../components/Container'

export class Repositories extends React.Component {
  state = {
    login: 'reactjs',
  }

  static propTypes = {
    getAllRespositories: PropTypes.objectOf(PropTypes.shape).isRequired,
    history: PropTypes.objectOf(PropTypes.shape).isRequired,
  }

  showCommits = repository => {
    const { history } = this.props
    const { login } = this.state
    history.push(`/commits/${repository}/${login}`)
  }

  render() {
    const { getAllRespositories } = this.props
    const repositories = get(getAllRespositories, 'repositoryOwner.repositories.nodes', [])
    const { loading } = getAllRespositories
    return (
      <Container>
        <h1>Repositories by reactjs organization</h1>
        {loading && <div>loading...</div>}
        {!loading &&
          repositories.map(repository => (
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
  }
}

export default compose(
  graphql(GET_REPOSITORIES, {
    name: 'getAllRespositories',
    options: ({ login, first }) => ({
      variables: {
        login: 'reactjs' || login,
        first: 10 || first,
      },
    }),
  })
)(Repositories)
