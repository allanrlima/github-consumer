import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputComponent = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-left: 8px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export const Input = ({ onChange }) => <InputComponent type="text" onChange={onChange} />

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
}
