import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'


class RequestsIndex extends React.Component {
  constructor() {
    super()


    this.state = {
      requests: []
    }

  }

  componentDidMount() {
    axios.get('/api/requests')
      .then(res => this.setState({ requests: res.data }))
      .catch(err => console.log(err))
  }

  handleClick(e) {
    console.log(e.target.value)
  }

  render() {
    if (!this.state.requests) return null
    console.log(this.state.requests, 're render')
    return (
      <section className="section">
        <Navbar />
        <div className="container requests">

          <h2 className="requests">Active Requests</h2>

          <div className=' yellow'>


            <div className='wrapper-two'>
              <div className="add-request">
                <span><Link to='/requests/new'><button>Add a Request</button></Link></span>
              </div>
              <div className="rest-of-box">
                <p className='filter'> Filter results by:</p>
                <div className='searchDrops'>
                  <label>Framework</label>
                  <select>
                    <option>Framework</option>
                    <option>filter not installed yet </option>
                  </select>
                </div>

                <div className='searchDrops'>
                  <label>Language</label>
                  <select>
                    <option>Language</option>
                    <option>filter not installed yet </option>
                  </select>
                </div>
                <button className='search-button'>Search</button>
              </div>
            </div>

          </div>
          {this.state.requests.map((request, i) => (
            <div className="" key={i}>
              <div className='request-card'>
                <h5 className="card-title"><Link className="link" to={`/requests/${request._id}`}>{request.title}</Link></h5>
                
                
                <div className="lang-and-framework">
                  <p>Language: {request.languages}</p>
                  <p>Framework: {request.frameworks}</p>
                </div>
                <small>Requested by: {request.user.firstName} {request.user.lastName}</small>
              </div>
            </div>
          ))}
        </div>

        
      </section>

    )
  }



}


export default RequestsIndex