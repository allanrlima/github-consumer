import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import { GET_COMMITS_FROM_REPOSITORY } from '../../services/api'
import { Container } from '../../components/Container'
import { Input } from '../../components/Input/index'
import { Commit } from './components/Commit'
import { Button } from '../../components/Button/index'

const Header = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export class Commits extends React.Component {
  state = {
    search: '',
  }

  static propTypes = {
    history: PropTypes.func.isRequired,
    match: PropTypes.PropTypes.objectOf(PropTypes.shape).isRequired,
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({
      search: value,
    })
  }

  filterSearchCommits = value => {
    const { search } = this.state
    const searchLowerCase = search.toLowerCase()
    return (
      value.node.author.name.toLowerCase().includes(searchLowerCase) ||
      value.node.messageHeadline.toLowerCase().includes(searchLowerCase)
    )
  }

  checkSearchCommits = commits => {
    const { search } = this.state
    if (search !== '') {
      return commits.filter(value => this.filterSearchCommits(value))
    }
    return commits
  }

  goToRepositoriesPage = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { match } = this.props
    const { name } = match.params
    const { owner } = match.params

    const variables = {
      name,
      owner,
      first: 20,
    }

    return (
      <Query query={GET_COMMITS_FROM_REPOSITORY} variables={variables}>
        {({ loading, data }) => {
          if (loading) return <div>carregando...</div>
          const commits = get(data, 'repository.ref.target.history.edges', [])
          return (
            <Container>
              <Header>
                <div>
                  Search:
                  <Input onChange={this.handleChange} />
                </div>
                <div>
                  <Button title="Back to repositories" onClick={this.goToRepositoriesPage} />
                </div>
              </Header>
              {this.checkSearchCommits(commits).map(commit => {
                const { node } = commit
                const { author } = node
                return <Commit title={node.messageHeadline} name={author.name} />
              })}
            </Container>
          )
        }}
      </Query>
    )
  }
}
