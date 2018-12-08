import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import logo from './logo.svg'
import './App.css'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">Github consumer</div>
      </ApolloProvider>
    )
  }
}

export default App
