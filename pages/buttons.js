import Head from 'next/head'
import Main from '../components/Main'
import Row from '../components/Row'
import Col from '../components/Col'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'
import PrimaryNav from '../molecules/PrimaryNav'

export default () => (
    <Main>
        <PrimaryNav />
        <h1>Buttons</h1>
        <Row>
            <Col>
                <Button type='primary'>Primary</Button> <Button type='secondary'>Secondary</Button> <Button type='success'>Success</Button> <Button type='danger'>Danger</Button> <Button type='warning'>Warning</Button> <Button type='info'>Info</Button> <Button type='link'>Link</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <ButtonGroup>
                    <Button>Uno</Button>
                    <Button>Dos</Button>
                    <Button>Tres</Button>
                    <Button>Quatro</Button>
                </ButtonGroup>
            </Col>
        </Row>
    </Main>
)