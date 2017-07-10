import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import theme from 'react-syntax-highlighter/dist/styles/hopscotch'

import { files, componentFiles } from '../../api/listComponents'
import Main from '../../organisms/Main'
import Row from '../../components/Row'
import Col from '../../components/Col'
import PrimaryNav from '../../molecules/PrimaryNav'

registerLanguage('javascript', js)

const ComponentFile = ({
  fileName,
  contents
}) => (
  <Row>
    <Col>
      {
        (typeof contents === typeof '') ? (
          <div>
            <h2>{ fileName }</h2>
            <SyntaxHighlighter
              language='javascript'
              style={ theme }
              
              children={ contents }
            />
          </div>
        ) : (
          Object.keys(contents).map(fileName => (
            <ComponentFile fileName={ fileName } contents={ contents[fileName ] } />
          ))
        )
      }
    </Col>
  </Row>
)


export default ({

}) => (
  <Main title='Library: Components'>
    <PrimaryNav />
    <h1>Components Library</h1>
  {
    Object.keys(componentFiles).map(fileName => (
      <ComponentFile fileName={ fileName } contents={ componentFiles[fileName ] } />
    ))
  }
  </Main>
)