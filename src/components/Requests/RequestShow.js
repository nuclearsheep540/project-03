import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'


class RequestShow extends React.Component {
  constructor() {
    super()

    this.state = {
      requestData: []
    }

    this.handleDelete = this.handleDelete.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/requests/${this.props.match.params.id}`)
      .then(res => this.setState({ requestData: res.data }))
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.requestData.user
  }

  handleDelete(){
    const requestId = this.props.match.params.id
    axios.delete(`/api/requests/${requestId}`), {
      Headers: { Authorization: `Bearer ${Auth.getToken()}` }
    }
      .then(() => this.props.history.push('/requests'))
      .catch(err => console.log(err))
  }


  render() {
    console.log(this.state.requestData._id, 'user!')
    console.log(this.state.requestData, 'reponse saved')
    if (!this.state.requestData) return null
    return (
      <div>
        <section className="section">
          <div className="container">
            <h2 className="title">REQUESTS SHOW PAGE</h2>
            <h3>{this.state.requestData.title}</h3>
            <p>{this.state.requestData.framework}</p>
            <p>{this.state.requestData.language}</p>
            <p>{this.state.requestData.description}</p>
            <p>{this.state.requestData.user}</p>
            {this.isOwner() &&
                <>
                  <Link to={`/requests/${this.state.requestData._id}/edit`}>Edit</Link>
                  <button onClick={this.handleDelete} className="button is-danger">Delete Request</button>
                </>
            }
          </div> 
        </section>    
      </div>
    )
  }
}

export default RequestShow