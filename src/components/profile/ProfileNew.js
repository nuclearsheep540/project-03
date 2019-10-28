import React from 'react'
import ProfileForm from './ProfileForm'
import axios from 'axios'
import Auth from '../../lib/auth'

class ProfileNew extends React.Component {
  constructor() {
    super()

    this.state = {
      user: {
        newUser: 'false'
      },
      userProfile: {
        firstName: '',
        lastName: '',
        image: '',
        age: '',
        location: '',
        fieldIndustry: '',
        skills: '',
        languages: '',
        frameworks: '',
        qualifications: ''
      }
   
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const userProfile = { ...this.state.userProfile, [name]: value }
    this.setState({ userProfile })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('props are ', this.props.match)
    console.log('auth user is ', Auth.getPayLoad())
    console.log('state is ', this.state)
    axios.post('/api/profile', this.state.userProfile, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        console.log('profile updated:', res.data)
        this.props.history.push('/profile/show')
        this.notNew()
      })
  }
  notNew(){
    axios.put('/api/login', { newUser: 'false' }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">Your Profile</h2>
          <ProfileForm
            profileData={this.state.userProfile}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default ProfileNew