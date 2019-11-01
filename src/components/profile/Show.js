import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

export default class Show extends React.Component {
  constructor() {
    super()
    this.state = {
      requests: [],
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
        console.log('profile data recieved: ', this.state.profile)
        this.getPosts()
      })
  }

  isOwner() {
    // return Auth get payload, to === the state of profile.user.username
  }
  getPosts() {
    axios.get('/api/requests')
      .then(res => {
        this.setState({ requests: res.data })
        console.log('post before filter', this.state.requests)
        const userPosts = this.state.requests.filter(post => post.user._id === Auth.getPayLoad().sub)
        console.log('posts after filter', userPosts)
        this.setState({ requests: userPosts })
      })
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
        <div className='content'>

          <div className='container'>
            <h2 className="title">{`Welcome back, ${Auth.getName()}`}</h2>


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

            <Link to={`/profile/${profile._id}/edit`}> <button>Edit profile</button> </Link>
          </div>
        </div>
        <br />
        <h4 className='center'>Dashboard</h4>
        <div className='content' >
          {this.state.requests.map((elem, i) => (
            <Link to={`../../requests/${elem._id}`} key={i}><div className='yellowProfile'>{elem.title} posted on: {elem.createdAt}</div></Link>
          )
          )}
        </div>

      </section>

    )
  }

}