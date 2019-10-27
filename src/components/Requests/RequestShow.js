import React from 'react'
import axios from 'axios'

class RequestShow extends React.Component {
  constructor() {
    super()

    this.state = {
      requestData: null
    }

  }

  componentDidMount() {
    axios.get(`/api/requests/${this.props.match.params.id}`)
      .then(res => this.setState({ requestData: res.data }))
      .catch(err => console.log(err))
  }


  render() {
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
          </div> 
        </section>    
      </div>
    )
  }
}

export default RequestShow