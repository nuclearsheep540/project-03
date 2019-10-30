import React from 'react'
import RequestsForm from './RequestsForm'
import axios from 'axios'
import Auth from '../../lib/auth'

class RequestsNew extends React.Component {
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

  handleLanguage(selected) {
    const languages = selected 
    const data = { ...this.state.data, languages: languages.value }
    this.setState({ data })
  }

  handleFramework(selected) {
    const frameworks = selected 
    const data = { ...this.state.data, frameworks: frameworks.value }
    // const data = [ ...frameworks ]
    this.setState({ data })
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/requests', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    }) 
      .then(res => {
        this.props.history.push(`/requests/${res.data._id}`)
      })
      .catch(err => console.log(err)) 
  }

  
  render() {
    console.log('trying to see if langs/frame are being saved',this.state.data)
    return (
      <div>
        <h1>NEW REQUEST</h1>
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


export default RequestsNew