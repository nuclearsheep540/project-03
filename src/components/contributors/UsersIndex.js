import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class UsersIndex extends React.Component {
  constructor() {
    super()


    this.state = {
      everyone: []
    }

  }

  componentDidMount() {
    axios.get('/api/all')
      .then(res => this.setState({ everyone: res.data }))
      .catch(err => console.log(err))
  }

  handleClick(e) {
    console.log(e.target.value)

  }

  render() {
    if (!this.state) return null
    console.log(this.state.requests, 're render')
    return (
      <section className="section">
        <div className="container requests">

          <h2 className="title">Skill Share Contributors</h2>

          {this.state.everyone.map((elem, i) => (
            <div key={i} className='input-area'>
              <Link to={`/profile/show/${elem._id}`}><p>{elem.firstName} {elem.lastName}</p></Link>
              <small className='indexP'>Memeber since {elem.createdAt}</small>
            </div>
          )
          )}


        </div>
      </section>

    )
  }



}