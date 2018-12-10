import React from 'react'
import { shallow } from 'enzyme'
import { Commits } from './index'

const props = {
  history: {
    push: jest.fn(),
  },
  match: {
    params: {
      name: 'reactjs',
      owner: 'test',
    },
  },
}

describe('Commits', () => {
  it('renders without crashing', () => {
    shallow(<Commits {...props} />)
  })

  it('should handle change in search state', () => {
    const component = shallow(<Commits {...props} />)
    const event = {
      target: {
        value: 'test',
      },
    }
    component.instance().handleChange(event)
    expect(component.state().search).toBe('test')
  })
  it('should filter for search commits thats matchs', () => {
    const component = shallow(<Commits {...props} />)

    component.setState({
      search: 'test',
    })

    const value = {
      node: {
        messageHeadline: 'tomorrow',
        author: {
          name: 'test',
        },
      },
    }

    const result = component.instance().filterSearchCommits(value)
    expect(result).toBeTruthy()
  })

  it('should fail in filter for search commits thats dont matchs', () => {
    const component = shallow(<Commits {...props} />)

    component.setState({
      search: 'play',
    })

    const value = {
      node: {
        messageHeadline: 'tomorrow',
        author: {
          name: 'test',
        },
      },
    }

    const result = component.instance().filterSearchCommits(value)
    expect(result).toBeFalsy()
  })

  it('should check if is necessary search for commits', () => {
    const component = shallow(<Commits {...props} />)

    component.setState({
      search: 'test',
    })

    const commits = [
      {
        node: {
          messageHeadline: 'tomorrow',
          author: {
            name: 'test',
          },
        },
      },
    ]

    const result = component.instance().checkSearchCommits(commits)
    expect(result).toBeTruthy()
  })
  it('should dont search for commits', () => {
    const component = shallow(<Commits {...props} />)

    component.setState({
      search: '',
    })

    const commits = [
      {
        node: {
          messageHeadline: 'tomorrow',
          author: {
            name: 'test',
          },
        },
      },
    ]

    const result = component.instance().checkSearchCommits(commits)
    expect(result).toBe(commits)
  })

  it('should call history.push function', () => {
    const component = shallow(<Commits {...props} />)
    component.instance().goToRepositoriesPage()
    expect(props.history.push).toBeCalled()
  })
})
