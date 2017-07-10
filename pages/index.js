import Head from 'next/head'
import Link from 'next/link'
import Main from '../organisms/Main'
import Row from '../components/Row'
import Col from '../components/Col'
import Nav from '../components/Nav'
import Alert from '../components/Alert'
import Button from '../components/Button'
import PrimaryNav from '../molecules/PrimaryNav'

export default () => (
    <Main title='Next.js ❤️ React'>
        <PrimaryNav />
        <Row>
            <Col>
                <Nav column>
                    <Link href='/repos'><a>Search repos</a></Link>
                    <Link href='/library/components'><a>Components library</a></Link>
                </Nav>
            </Col>
        </Row>
    </Main>
)