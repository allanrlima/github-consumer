import React from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Repositories } from './containers/Repositories/index'
import { Commits } from './containers/Commits/index'

const cache = new InMemoryCache()

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache,
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route path="/" exact component={Repositories} />
        <Route path="/commits/:name/:owner" exact component={Commits} />
      </div>
    </Router>
  </ApolloProvider>
)

export default App
