import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import theme from 'react-syntax-highlighter/dist/styles/hopscotch'

import { files, componentFiles } from '../../api/listComponents'
import Main from '../../components/Main'
import Row from '../../components/Row'
import Col from '../../components/Col'

registerLanguage('javascript', js)


export default ({

}) => (
  <Main title='Library: Components'>
    <h1>Components Library</h1>
  {
    Object.keys(componentFiles).map(fileName => (
      <Row>
        <Col>
          <h2>{ fileName }</h2>
          <SyntaxHighlighter
            language='javascript'
            style={ theme }
            
            children={ componentFiles[fileName] }
          />
        </Col>
      </Row>
    ))
  }
  </Main>
)