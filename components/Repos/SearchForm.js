import React from 'react'
import Button from '../Button'
import Router from 'next/router'

export default class SearchForm extends React.Component {
  static defaultProps = {
    initialTerm: '',
    initialLanguage: ''
  }

  state = {
    term: this.props.initialTerm,
    language: this.props.initialLanguage
  }

  handleChangeField = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSearch = (event) => {
    event.preventDefault()

    const { term, language } = this.state
    Router.push({
      pathname: '/repos',
      query: { term, language }
    })
  }

  render() {
    const {
      term,
      language
    } = this.state

    return (
      <div className='card mb-3'>
        <form className='card-block' method='get' onSubmit={ this.handleSearch }>
          <label>Search: <input name='term' value={ term } onChange={ this.handleChangeField } /></label>
          <label>Language: <input  name='language' value={ language } onChange={ this.handleChangeField } /></label>
          <Button type='submit' variation='primary'>Search</Button>
          <style jsx>{`
            label {
              display: block;
            }
          `}</style>
        </form>
      </div>
    )
  }

  componentWillReceiveProps({ initialTerm, initialLanguage }) {
    let stateChange = {}
    if (this.props.initialTerm !== initialTerm) {
      stateChange.term = initialTerm
    }
    if (this.props.initialLanguage !== initialLanguage) {
      stateChange.language = initialLanguage
    }
    this.setState(stateChange)
  }
}