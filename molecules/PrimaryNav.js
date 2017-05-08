import { Component } from 'react'
import Nav from '../components/Nav'

export default () => (
    <Nav center>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/buttons'>Buttons</Nav.Link>
        <Nav.Link href='/alerts'>Alerts</Nav.Link>
        <Nav.Link href='/navs'>Navs</Nav.Link>
    </Nav>
)