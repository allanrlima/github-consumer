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

export const GET_COMMITS_FROM_REPOSITORY = gql`
  query getCommitsFromRepository($name: String!, $owner: String!, $first: Int!) {
    repository(name: $name, owner: $owner) {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            id
            history(first: $first) {
              pageInfo {
                hasNextPage
              }
              edges {
                node {
                  messageHeadline
                  oid
                  message
                  author {
                    name
                    email
                    date
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
