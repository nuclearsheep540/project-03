import React from 'react'
import RequestForm from './RequestsForm'
import axios from 'axios'
import Auth from '../../lib/auth'

class RequestEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      requestData: []

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    const requestId = this.props.match.params.id
    axios.get(`/api/requests/${requestId}`)
      // .then(res => console.log(res.data, 'the res'))
      .then(res => this.setState({ requestData: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({ requestData: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const requestId = this.state.requestData._id
    console.log('the ID is', requestId)
    axios.put(`/api/requests/${requestId}`, this.state.requestData , {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/requests/${res.data._id}`)
      })
      .catch(err => console.log(err))
  }


 

  //HANDLECHANGE AND SUBMIT HERE AND PASS DOWN AS PROPS
  // WORK OUT DROPDOWNS FOR BEING PREPOPULATED



  render() {
    console.log(this.state.requestData, 'requestdata')
    return (
      <div>
        <h1>EDIT PAGE </h1>
        <RequestForm
          requestFormData={this.state.requestData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          
        
        />


      </div>
      
    )
  }
}

export default RequestEdit
