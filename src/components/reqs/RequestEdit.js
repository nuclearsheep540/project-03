import React from 'react'
import RequestsForm from './RequestsForm'
import axios from 'axios'
import Auth from '../../lib/auth'

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

  componentDidMount() {
    const requestId = this.props.match.params.id
    axios.get(`/api/requests/${requestId}`) //axios get is string
      .then(res => {
        const resCopy = { ...res.data }
        console.log('resCopy =',resCopy)
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
    const obj = {
      title: this.state.data.title,
      description: this.state.data.description,
      languages: [this.state.data.languages.value],
      frameworks: [this.state.data.frameworks.value]
    }
    console.log('sending to axios...', { obj })
    axios.put(`/api/requests/${requestId}`, obj, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log(res))
      .then(window.history.back())
      .catch(err => console.log(err))
  }
  back(){
    window.history.back()
  }

  render() {
    if (!this.state.data) return null
    console.log(this.state.data, 'the dataa')
    return (
      <div>
        <section className='section'>
          <div className='container'>

            <h2>Editing... #{this.props.match.params.id} </h2>
            <h5 className='button' onClick={this.back}>Cancel</h5>
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
        </section>
      </div>
    )
  }
}
export default RequestEdit
