import React from 'react'
import RequestsForm from './RequestsForm'
import axios from 'axios'
import Auth from '../../lib/auth'

class RequestEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handleFramework = this.handleFramework.bind(this)

  }

  componentDidMount() {
    const requestId = this.props.match.params.id
    axios.get(`/api/requests/${requestId}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))

  }

  handleChange(e) {
    console.log('e', e.target.value)
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleLanguage(selected) {
    console.log(selected.target)
    console.log('language',selected.map(sel => sel.value))
    const languages = selected ?  selected.map(item => item.value) : [''] 
    const langs = [ ...this.state.userProfile.languages, ...languages ]
    this.setState({ languages: langs })
  }

  handleFramework(selected){
    console.log('framework',selected.map(sel => sel.value))
    const frameworks = selected ? selected.map(item => item.value) : ['']
    console.log('frameworks accumulating =',frameworks)
    const frames = [ ...this.state.userProfile.frameworks, ...frameworks ]
    this.setState({ frameworks: frames })
  }

  handleSubmit(e) {
    e.preventDefault()
    const requestId = this.state.data._id
    console.log('the ID is', requestId)
    axios.put(`/api/requests/${requestId}`, this.state.data , {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/api/requests/${res.data._id}`)
      })
      .catch(err => console.log(err))
  }


 


  render() {
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
          
        />


      </div>
      
    )
  }
}

export default RequestEdit
