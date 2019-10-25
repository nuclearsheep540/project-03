import React from 'react'
import ProfileForm from './profileForm'
import axios from 'axios'
import Auth from '../../lib/auth'


class ProfileNew extends React.Component {
  constructor() {
    super()

    this.state = {
      profileData: {
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
      },
      profileNew: ''
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const profileData = { ...this.state.profileData, [name]: value }
    this.setState({ profileData })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios.post('/api/profile/new', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        axios.put(`/api/user/${res.data._id}`, { newUser: false }) 
        console.log(this.state)
        this.props.history.push(`/profile/show/${res.data._id}`)
      })
  }
  

  render() {
    return (
      <div>
        <h1>MAKE A PROFILE</h1>
        <ProfileForm
          profileData={this.state.profileData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default ProfileNew