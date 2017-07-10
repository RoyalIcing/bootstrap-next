import Head from 'next/head'
import Main from '../organisms/Main'
import Row from '../components/Row'
import Col from '../components/Col'
import Primary from '../components/Primary'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'
import PrimaryNav from '../molecules/PrimaryNav'

export default () => (
    <Main title='Bootstrap 4 Buttons'>
        <PrimaryNav />
        <Primary>Buttons</Primary>
        <Row className='mb-3'>
            <Col>
                <Button variation='primary'>Primary</Button> <Button variation='secondary'>Secondary</Button> <Button variation='success'>Success</Button> <Button variation='danger'>Danger</Button> <Button variation='warning'>Warning</Button> <Button variation='info'>Info</Button> <Button variation='link'>Link</Button>
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