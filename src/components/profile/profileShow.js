import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

export default class ProfileShow extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      user: {}
    }
    //binds
  }

  componentDidMount() { 
    console.log('fetching profile...')
    axios.get('/api/profile/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ data: res.data, user: res.data.userProfile })
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
    if (!this.state.data) return null
    if (!this.state.user) return null
    const data = this.state.data
    const user = this.state.user
    console.log('rendering profile...')
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">{`Welcome back, ${Auth.getName()}`}</h2>
          <small>Member since {data.createdAt}</small><br />
          {/* <button onClick={this.props.history.push('/profile/edit')}>Edit Profile</button> */}
          <p>first name: {user.firstName}</p>
          <p>last name: {user.lastName}</p>
          <p>image: </p>
          <p>age: {user.age} </p>
          <p>location: {user.location}</p>
          <p>industry: {user.fieldIndustry}</p>
          
          <div>languages: 
            {!user.languages ? '' : user.languages.map((elem, i) => <span key={i}>{elem} </span>)}
          </div>
          
          <div>frameworks: 
            {!user.frameworks ? '' : user.frameworks.map((elem, i) => <span key={i}>{elem} </span>)}
          </div>

          <div>qualifications: 
            {!user.qualifications ? '' : user.qualifications.forEach((elem, i) => <p key={i}>{elem}</p>)}
          </div>
        </div>
      </section>

    )
  }

}