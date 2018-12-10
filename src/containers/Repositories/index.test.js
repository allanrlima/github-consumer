import React from 'react'
import { shallow } from 'enzyme'
import { Repositories } from './index'

const props = {
  history: {
    push: jest.fn(),
  },
}

describe('Repositories', () => {
  it('renders without crashing', () => {
    shallow(<Repositories {...props} />)
  })

  it('should call history.push function', () => {
    const component = shallow(<Repositories {...props} />)
    const repository = 'test'
    component.instance().showCommits(repository)
    expect(props.history.push).toBeCalled()
  })
})
