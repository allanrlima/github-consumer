import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import logo from './logo.svg'
import './App.css'

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
})

class App extends Component {
  render() {
    return <div className="App">Github consumer</div>
  }
}

export default App
