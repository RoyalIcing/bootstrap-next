import { Component } from 'react'
import Link from 'next/link'

export default ({ children, type = 'secondary' }) => <button type="button" className={ `btn btn-${type}`} children={ children } />