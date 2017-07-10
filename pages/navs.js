import Head from 'next/head'
import Main from '../organisms/Main'
import PrimaryNav from '../molecules/PrimaryNav'
import Row from '../components/Row'
import Col from '../components/Col'
import Nav from '../components/Nav'
import NavLink from '../components/NavLink'

export default () => (
    <Main title='Bootstrap 4 Navs'>
        <PrimaryNav />
        <h1>Navs</h1>
        <Nav>
            <NavLink active>First</NavLink>
            <NavLink>Second</NavLink>
            <NavLink>Third</NavLink>
        </Nav>
        <Nav center>
            <NavLink active>First</NavLink>
            <NavLink>Second</NavLink>
            <NavLink>Third</NavLink>
        </Nav>
        <Nav column>
            <NavLink active>First</NavLink>
            <NavLink>Second</NavLink>
            <NavLink>Third</NavLink>
        </Nav>
        <Nav pills>
            <NavLink active>First</NavLink>
            <NavLink>Second</NavLink>
            <NavLink>Third</NavLink>
        </Nav>
        <Nav pills fill>
            <NavLink active>First</NavLink>
            <NavLink>Second</NavLink>
            <NavLink>Third</NavLink>
        </Nav>
        <Nav pills justified>
            <NavLink active>First</NavLink>
            <NavLink>Second</NavLink>
            <NavLink>Third</NavLink>
        </Nav>
        <Nav tabs>
            <NavLink active>First</NavLink>
            <NavLink>Second</NavLink>
            <NavLink>Third</NavLink>
        </Nav>
    </Main>
)