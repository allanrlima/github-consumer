import gql from 'graphql-tag'

export const GET_REPOSITORIES = gql`
  query getRepositories($login: String!, $first: Int) {
    user(login: $login) {
      repositories(first: $first) {
        nodes {
          name
        }
      }
    }
  }
`
