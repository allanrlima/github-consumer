import gql from 'graphql-tag'

export const GET_REPOSITORIES = gql`
  query getRepositories($login: String!, $first: Int, $orderBy: RepositoryOrder) {
    repositoryOwner(login: $login) {
      repositories(first: $first, orderBy: $orderBy) {
        totalCount
        nodes {
          name
          description
          forks {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`
