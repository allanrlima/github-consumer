import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { graphql, compose } from 'react-apollo'
import { GET_REPOSITORIES } from '../../services/api'
import { Repository } from '../../components/Repository'
import { Container } from '../../components/Container'

export const Home = ({ getAllRespositories }) => {
  const repositories = get(getAllRespositories, 'repositoryOwner.repositories.nodes', [])
  const { loading } = getAllRespositories
  console.log(repositories)
  return (
    <Container>
      {loading && <div>loading...</div>}
      {!loading &&
        repositories.map(repository => (
          <Repository
            name={repository.name}
            description={repository.description}
            stars={repository.stargazers.totalCount}
            forks={repository.forks.totalCount}
          />
        ))}
    </Container>
  )
}

Home.propTypes = {
  getAllRespositories: PropTypes.objectOf(PropTypes.shape).isRequired,
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
)(Home)
