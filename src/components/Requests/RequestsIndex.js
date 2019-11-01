import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
        <div className="container requests">

          <h2 className="title">Active Requests</h2>

          <div className=' yellow'>
            <div>
              {/* <h3>Active Requests</h3>   */}
              <span><Link to='/requests/new'><button>Add Request</button></Link></span>
              <button>Search</button>
            </div>

            <div className='wrapper-two'>

              <p className='indexP'> Filter results by:</p>
              <div className='searchDrops'>
                <label>Framework</label>
                <select>
                  <option> </option>
                  <option>filter not installed yet </option>
                </select>
              </div>

              <div className='searchDrops'>
                <label>Language</label>
                <select>
                  <option> </option>
                  <option>filter not installed yet </option>
                </select>
              </div>
            </div>

          </div>

          {this.state.requests.map((request, i) => (
            <div className="" key={i}>
              <div className='request-card'>
                <h5><Link className="link" to={`/requests/${request._id}`}>{request.title}</Link></h5>
                <small>Requested by: {request.user.firstName} {request.user.lastName}</small>

                <div className='wrapper-two'>
                  <p className='indexP'>Language: {request.languages}</p>
                  <p>Framework: {request.frameworks}</p>
                </div>

                <p className='indexP'>{request.description}</p>

                {/* <p>{request.user}</p> */}
              </div>
            </div>
          ))}

        </div>
      </section>

    )
  }



}


export default RequestsIndex