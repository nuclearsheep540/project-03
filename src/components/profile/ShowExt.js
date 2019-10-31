import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
// import { Link } from 'react-router-dom'

export default class ShowExt extends React.Component {
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
    const showId = this.props.match.params.id
    axios.get(`/api/profile/show/${showId}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ user: res.data, profile: res.data.userProfile })
        console.log('profile data recieved: ', this.state.profile)
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
    console.log('this profile=', profile)
    console.log('rendering profile...')
    return (
      <section className='section'>
        <div className='content'>

          <div className='container'>
            <h2 className="title">{`${profile.firstName}`}&apos;s Profile</h2>


            <div className='avatar'>
              <img className='avatar' src={profile.image} />
            </div>
            <small>Member since {user.createdAt}</small>
            <p className=''>Name: {profile.firstName} {profile.lastName} </p>

            <p className='indexP'>Age {profile.age}, from {profile.location}</p>

            <p>Works in {profile.fieldIndustry}</p>


            <div>Languages: {!profile.languages ? '' : profile.languages.map((elem, i) => <span key={i}>{elem} </span>)}
            </div>

            <div>Frameworks: {!profile.frameworks ? '' : profile.frameworks.map((elem, i) => <span key={i}>{elem} </span>)}
            </div>

            <p>Qualifications: {profile.qualifications}
            </p>

           
          </div>
        </div>
      </section>



    )
  }

}