import Head from 'next/head'
import Link from 'next/link'
import Main from '../components/Main'
import Row from '../components/Row'
import Col from '../components/Col'
import Primary from '../components/Primary'
import Button from '../components/Button'
import ButtonGroup from '../components/ButtonGroup'
import PrimaryNav from '../molecules/PrimaryNav'
import Repo from '../components/Repos/Repo'
import SearchForm from '../components/Repos/SearchForm'
import * as gitHubSearch from '../api/github/search'

const ReposPage = ({
  totalCount,
  repos,
  url
}) => (
    <Main>
        <PrimaryNav />
        <Primary>
        {
          !!repos ? (
            <span>{ totalCount } repos</span>
          ) : (
            'Search repos'
          )
        }
        </Primary>
        <SearchForm initialTerm={ url.query.term } initialLanguage={ url.query.language } />
        <Row>
            <Col>
            {
              !!repos && repos.map(repo => (
                <Repo key={ repo.id } repo={ repo } />
              ))
            }
            </Col>
        </Row>
    </Main>
)

// Loaded on server for initial request, client otherwise
ReposPage.getInitialProps = async ({
  query
}) => {
  try {
    const result = await gitHubSearch.searchRepos(query)
    return {
      totalCount: result.total_count,
      repos: result.items
    }
  }
  catch (error) {
    return {
    }
  }
}

export default ReposPage