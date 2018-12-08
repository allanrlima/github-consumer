import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import './App.css'
import Home from './containers/Home/index'

const cache = new InMemoryCache()

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${'99bdfcbb4604c7b0808f4cd67b9559c68901436a'}`,
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache,
})

class App extends Component {
  render() {
    console.log(client)
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
