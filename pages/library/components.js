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
  info
}) => (
  <Row>
    <Col>
      {
        (info.isFile) ? (
          <div>
            <h2>{ fileName }</h2>
            { JSON.stringify(info.ast) }
            <SyntaxHighlighter
              language='javascript'
              style={ theme }
              children={ info.content }
            />
          </div>
        ) : (
          Object.keys(info).map(fileName => (
            <ComponentFile key={ fileName } fileName={ fileName } info={ info[fileName ] } />
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
      <ComponentFile key={ fileName }
        fileName={ fileName }
        info={ componentFiles[fileName ] }
      />
    ))
  }
  </Main>
)