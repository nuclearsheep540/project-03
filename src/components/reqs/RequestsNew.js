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
      { value: 'Javascript', label: 'Javascript' },
      { value: 'C#', label: 'C#' },
      { value: 'Python', label: 'Python' },
      { value: 'Java', label: 'Java' },
      { value: 'Rust', label: 'Rust' },
      { value: 'Go', label: 'Go' },
      { value: 'Elixr', label: 'Elixr' },
      { value: 'Ruby', label: 'Ruby' },
      { value: 'Kotlin', label: 'Kotlin' },
      { value: 'Typescript', label: 'Typescript' },
      { value: 'C++', label: 'C++' },
      { value: 'PHP', label: 'PHP' },
      { value: 'CSS', label: 'CSS' }
    ],
    this.frameworks = [
      { value: 'Angular', label: 'Angular' },
      { value: 'Django', label: 'Django' },
      { value: 'Ruby on rails', label: 'Ruby On Rails' },
      { value: 'ASP.net', label: 'ASP.net' },
      { value: 'Meteor', label: 'Meteor' },
      { value: 'Flask', label: 'Flask' },
      { value: 'ReactJS', label: 'ReactJS' },
      { value: 'Phoenix', label: 'Phoenix' },
      { value: 'Spring', label: 'Spring' },
      { value: 'Play', label: 'Play' },
      { value: 'Express', label: 'Express' },
      { value: 'Vuejs', label: 'Vue.js' },
      { value: 'Cakephp', label: 'CakePHP' },
      { value: 'Bootstrap', label: 'Bootstrap' },
      { value: 'Bulma', label: 'Bulma' }
    ]

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handleFramework = this.handleFramework.bind(this)

  }

  handleLanguage(selected) {
    const languages = selected 
    const data = { ...this.state.data, languages: languages }
    this.setState({ data })
  }

  handleFramework(selected) {
    const frameworks = selected 
    const data = { ...this.state.data, frameworks: frameworks }
    // const data = [ ...frameworks ]
    this.setState({ data })
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const obj = {
      title: this.state.data.title,
      description: this.state.data.description,
      languages: [this.state.data.languages.value],
      frameworks: [this.state.data.frameworks.value]
    }
    axios.post('/api/requests', obj, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    }) 
      .then(res => {
        this.props.history.push(`/requests/${res.data._id}`)
      })
      .catch(err => console.log(err)) 
  }

  
  render() {
    console.log('trying to see if langs/frame are being saved', this.state.data)
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <h2>New Request</h2>
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
          /</section>
      </div>
    )
  }
}


export default RequestsNew