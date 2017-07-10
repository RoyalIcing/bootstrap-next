import axios from 'axios'

export function searchRepos({
  term,
  language
}) {
  return axios({
    url: 'https://api.github.com/search/repositories',
    params: {
      q: [
        term,
        language && `language:${language}`
      ].filter(Boolean).join('+')
    }
  })
    .then(({ data }) => data)
}

export function searchReact() {
  return searchRepos({
    term: 'react',
    language: 'react'
  })
}