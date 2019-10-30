import React from 'react'
import RequestsForm from './RequestsForm'
import axios from 'axios'
import Auth from '../../lib/auth'

// mongoose wants strings
// select wants objects

// axios get = string
// mounting turns string => object
// select is happy
// work with objects
// axios push, turn objects back to strings



class RequestEdit extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        title: '',
        languages: [],
        frameworks: [],
        description: ''
      }
    }
    this.languages = [
      { value: 'javascript', label: 'Javascript' },
      { value: 'C#', label: 'C#' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'rust', label: 'Rust' },
      { value: 'go', label: 'Go' },
      { value: 'elixr', label: 'Elixr' },
      { value: 'ruby', label: 'Ruby' },
      { value: 'kotlin', label: 'Kotlin' },
      { value: 'typescript', label: 'Typescript' },
      { value: 'C++', label: 'C++' },
      { value: 'php', label: 'PHP' },
      { value: 'css', label: 'CSS' }
    ],
    this.frameworks = [
      { value: 'angular', label: 'Angular' },
      { value: 'django', label: 'Django' },
      { value: 'ruby on rails', label: 'Ruby On Rails' },
      { value: 'asp.net', label: 'ASP.net' },
      { value: 'meteor', label: 'Meteor' },
      { value: 'flask', label: 'Flask' },
      { value: 'reactjs', label: 'ReactJS' },
      { value: 'phoenix', label: 'Phoenix' },
      { value: 'spring', label: 'Spring' },
      { value: 'play', label: 'Play' },
      { value: 'express', label: 'Express' },
      { value: 'vuejs', label: 'Vue.js' },
      { value: 'cakephp', label: 'CakePHP' },
      { value: 'bootstrap', label: 'Bootstrap' },
      { value: 'bulma', label: 'Bulma' }
    ]

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handleFramework = this.handleFramework.bind(this)

  }

  componentDidMount() {
    const requestId = this.props.match.params.id
    axios.get(`/api/requests/${requestId}`) //axios get is string
      .then( res => {
        const resCopy = { ...res.data }
        resCopy.frameworks = resCopy.frameworks.map(elem => {
          return { value: elem, label: elem } //turn everything that's a string, into an object
        })
        resCopy.languages = resCopy.languages.map(elem => {
          return { value: elem, label: elem }
        })
        this.setState({ data: resCopy })
      })
      .catch(err => console.log(err))
  }

  handleLanguage(selected) {
    const languages = selected 
    const data = { ...this.state.data, languages: languages }
    this.setState({ data })
  }

  handleFramework(selected) {
    const frameworks = selected 
    const data = { ...this.state.data, frameworks: frameworks }
    this.setState({ data })
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const requestId = this.state.data._id
    console.log('the ID is', requestId)
    //const the strings of data
    //map them into { value: elem } objects
    const langs = this.state.data.languages
    console.log('axios langs =',langs)

    // axios.put(`/api/requests/${requestId}`, langs, {
    //   headers: { Authorization: `Bearer ${Auth.getToken()}` }
    // })
    //   .then(res => {
    //     this.props.history.push(`/requests/${res.data._id}`)
    //   })
    //   .catch(err => console.log(err))
  }
  
  render() {
    if (!this.state.data) return null
    console.log(this.state.data, 'the dataa')
    return (
      <div>
        <h1>EDIT PAGE </h1>
        <RequestsForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleLanguage={this.handleLanguage}
          handleFramework={this.handleFramework}
          frameworks={this.frameworks}
          languages={this.languages}
        />


      </div>
      
    )
  }
}

export default RequestEdit
