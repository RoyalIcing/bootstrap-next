import { Component } from 'react'

export default ({ children, type = 'info' }) => (
  <div className={ `alert alert-${type}` } role='alert' children={ children } />
)