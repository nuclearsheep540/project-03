import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

export default class ShowExt extends React.Component {
  constructor() {
    super()
    this.state = {
      requests: [],
      user: {},
      profile: {} // THE PROFILE ID IS STORED IN USER
    }
    this.getPosts = this.getPosts.bind(this)
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
      .then(this.getPosts)
  }
  getPosts() {
    axios.get('/api/requests')
      .then(res => {
        this.setState({ requests: res.data })
        console.log('post before filter',this.state.requests)
        const userPosts = this.state.requests.filter(post => post.user._id === this.props.match.params.id)
        console.log('posts after filter', userPosts)
        this.setState({ requests: userPosts })
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
    if (!this.state.requests) return null

    const user = this.state.user
    const profile = this.state.profile
    console.log('this profile=', profile)
    console.log('rendering profile...')
    
    return (
      
      <section className='section profile-section'>
        <div className='content-width'>
          <div className="container">
            <div className="profile-box">
              <div className='profile-info'>
                <h2 className="title">{`${profile.firstName}`}&apos;s Profile</h2>


                <div className='avatar'>
                  <img className='avatar' src={profile.image} />
                </div>
                <small>Member since {user.createdAt}</small>
                <p className=''>Name:     {profile.firstName} {profile.lastName} </p>

                <p className='indexP'>Age {profile.age}, from {profile.location}</p>

                <p>Works in {profile.fieldIndustry}</p>


                <div>Languages: {!profile.languages ? '' : profile.languages.map((elem, i) => <span key={i}>{elem} </span>)}
                </div>

                <div>Frameworks: {!profile.frameworks ? '' : profile.frameworks.map((elem, i) => <span key={i}>{elem} </span>)}
                </div>

                <p>Qualifications: {profile.qualifications}
                </p>

           
              </div>
              <div className='content-profile1' >
                <h4 className='center'>Dashboard</h4>
                <div className='content-p'>
                  <h6>{profile.firstName} {profile.lastName}'s activity</h6>

                  {this.state.requests.map((elem, i) => (
                    <Link to={`../../requests/${elem._id}`} key={i}><div className='yellowProfile'>{elem.title} posted on: {elem.createdAt}</div></Link>
                  )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>

    )
  }

}