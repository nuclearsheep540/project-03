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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handleFramework = this.handleFramework.bind(this)

  }

  handleChange(e) {
    console.log('e', e.target.value)
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleLanguage(selected) {
    console.log('language',selected.map(sel => sel.value))
    console.log('E.TARGET')
    const languages = selected ?  selected.map(item => item.value) : [''] 
    const langs = [ ...languages ]
    this.setState({ data: { ...this.state.data, languages: langs } })
  }

  handleFramework(selected){
    console.log('framework',selected.map(sel => sel.value))
    const frameworks = selected ? selected.map(item => item.value) : ['']
    console.log('frameworks accumulating =',frameworks)
    const frames = [ ...frameworks ]
    this.setState({ data: { ...this.state.data, frameworks: frames } })
  }


  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/requests', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    }) 
      .then(res => {
        this.props.history.push(`/api/requests/${res.data._id}`)
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
        />


      </div>
      
    )
  }
}


export default RequestsNew