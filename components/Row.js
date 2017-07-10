import { Component } from 'react'

export default ({ className, children }) => <div children={ children } className={ ['row', className || ''].join(' ') } />