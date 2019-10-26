import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

export default class ProfileShow extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      user: {},
      mine: []
    }
    //binds
  }

  componentDidMount() { //get the profile, specifically from the token logged in
    console.log('fetching profile...')
    axios.get('/api/profile', {
      // headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ user: res.data })
        const profileName = this.state.data.username
        this.props.history.push(`/profile/${profileName}`)
        this.getPosts()
      })
      .catch(err => console.log(err))
  }
  getPosts(){ //get the data in requests, and call 
    console.log('finding user posts...')
    axios.get('/api/requests')
      .then(res => {
        this.setState({ data: res.data })
        console.log(this.state.princesses)
        this.displayOwnership()
      })
      .catch(err => console.log(err))
  }
  displayOwnership() {
    const mine = this.state.user.filter(princess => {
      return Auth.getPayLoad().sub === princess.user._id
    })
    this.setState({ mine })
    // console.log('all princesses = ', myPrincesses)
    console.log('mine = ',this.state.mine)
  }

  getApi() {
    // custom call for grabbing api data
  }

  isOwner() {
    // return Auth get payload, to === the state of profile.user.username
  }

  handleDelete() {
    const userId = this.props.match.params.id
    axios.delete(`/api/profile/${userId}`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">{`Welcome back, ${Auth.getName()}`}</h2>
        </div>
      </section>

    )
  }

}