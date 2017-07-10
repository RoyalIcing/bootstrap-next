import Head from 'next/head'
import Main from '../organisms/Main'
import Row from '../components/Row'
import Col from '../components/Col'
import Alert from '../components/Alert'
import PrimaryNav from '../molecules/PrimaryNav'

export default () => (
    <Main>
        <PrimaryNav />
        <h1>Alerts</h1>
        <Row>
            <Col>
                <Alert>Alert</Alert>
                <Alert type='danger'>Danger!</Alert>
            </Col>
        </Row>
    </Main>
)