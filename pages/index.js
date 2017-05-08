import Head from 'next/head'
import Link from 'next/link'
import Main from '../components/Main'
import Row from '../components/Row'
import Col from '../components/Col'
import Nav from '../components/Nav'
import Alert from '../components/Alert'
import Button from '../components/Button'
import PrimaryNav from '../molecules/PrimaryNav'

export default () => (
    <Main>
        <PrimaryNav />
        <Row>
            <Col>
                <h1>Bootstrap 4</h1>
                <Alert>Alert</Alert>
                <Alert type='danger'>Danger!</Alert>
                <Button type='primary'>Primary</Button>
                <Button type='success'>Success</Button>
            </Col>
        </Row>
    </Main>
)