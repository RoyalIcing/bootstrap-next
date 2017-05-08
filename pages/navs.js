import Head from 'next/head'
import Main from '../components/Main'
import PrimaryNav from '../molecules/PrimaryNav'
import Row from '../components/Row'
import Col from '../components/Col'
import Nav from '../components/Nav'

export default () => (
    <Main>
        <PrimaryNav />
        <h1>Navs</h1>
        <Nav>
            <Nav.Link active>First</Nav.Link>
            <Nav.Link>Second</Nav.Link>
            <Nav.Link>Third</Nav.Link>
        </Nav>
        <Nav center>
            <Nav.Link active>First</Nav.Link>
            <Nav.Link>Second</Nav.Link>
            <Nav.Link>Third</Nav.Link>
        </Nav>
        <Nav column>
            <Nav.Link active>First</Nav.Link>
            <Nav.Link>Second</Nav.Link>
            <Nav.Link>Third</Nav.Link>
        </Nav>
        <Nav pills>
            <Nav.Link active>First</Nav.Link>
            <Nav.Link>Second</Nav.Link>
            <Nav.Link>Third</Nav.Link>
        </Nav>
        <Nav pills fill>
            <Nav.Link active>First</Nav.Link>
            <Nav.Link>Second</Nav.Link>
            <Nav.Link>Third</Nav.Link>
        </Nav>
        <Nav pills justified>
            <Nav.Link active>First</Nav.Link>
            <Nav.Link>Second</Nav.Link>
            <Nav.Link>Third</Nav.Link>
        </Nav>
        <Nav tabs>
            <Nav.Link active>First</Nav.Link>
            <Nav.Link>Second</Nav.Link>
            <Nav.Link>Third</Nav.Link>
        </Nav>
    </Main>
)