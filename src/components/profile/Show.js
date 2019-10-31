import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

export default class Show extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      profile: {} // THE PROFILE ID IS STORED IN USER
    }
    //binds
  }

  componentDidMount() { 
    console.log('fetching profile...')
    axios.get('/api/profile/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ user: res.data, profile: res.data.userProfile })
        console.log('profile data recieved: ', this.state)
      })
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
    if (!this.state.user) return null
    if (!this.state.profile) return null
    const user = this.state.user
    const profile = this.state.profile
    console.log('rendering profile...')
    console.log('fidning id', this.state.profile._id)
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">{`Welcome back, ${Auth.getName()}`}</h2>
         
          {/* <button onClick={this.props.history.push('/profile/edit')}>Edit Profile</button> */}
          <div className='avatar'>
            <img className='avatar' src={profile.image} /> 
          </div>
          <span>Name: {profile.firstName} {profile.lastName} </span><br />
          <small>Member since {user.createdAt}</small><br />

          <span>age: {profile.age}, location: {profile.location}</span>
      
          <p>industry: {profile.fieldIndustry}</p>
          
          <div>languages: {!profile.languages ? '' : profile.languages.map((elem, i) => <span key={i}>{elem} </span>)}
          </div>
          
          <div>frameworks: {!profile.frameworks ? '' : profile.frameworks.map((elem, i) => <span key={i}>{elem} </span>)}
          </div>

          <div>qualifications: {profile.qualifications}
          </div>
         
          <Link to={`/profile/${profile._id}/edit`}> <button>Edit profile</button> </Link>
        </div>
      </section>
      
      

    )
  }

}