import { Component } from 'react'
import Nav from '../components/Nav'

import NavLink from '../components/NavLink'
export default () => (
    <Nav center>
        <NavLink href='/'>Home</NavLink>
        <NavLink href={{ pathname: '/repos', query: { term: 'react', language: 'javascript' } }}>
            React
        </NavLink>
        <NavLink href={{ pathname: '/repos', query: { term: 'swift' } }}>
            Swift
        </NavLink>
    </Nav>
)