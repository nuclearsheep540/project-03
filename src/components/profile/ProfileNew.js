import React from 'react'
import ProfileForm from './ProfileForm'
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
      userData: {
        newUser: false
      }

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makeProfile = this.makeProfile.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const profileData = { ...this.state.profileData, [name]: value }
    this.setState({ profileData })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('props are ', this.props.match)
    console.log('auth user is ', Auth.getPayLoad())
    // const user = Auth.getPayLoad()
    console.log('state is ', this.state)
    axios.put('/api/login', this.state.userData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        console.log('new user = ', res.data)
        this.makeProfile()
      })
  }

  makeProfile() {
    axios.post('/api/profile/new', this.state.profileData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        console.log('profile created:', res.data),
        this.props.history.push('/profile/show')
      })
  }



  // console.log('this id = ', )
  // console.log(this.state.data)
  // const userId = Auth.getPayLoad().sub
  // axios.post('/api/profile/new/', this.state.data, {
  //   headers: { Authorization: `Bearer ${Auth.getToken()}` }
  // })
  //   .then(res => {
  //     console.log('axios post to profile/new = ', res)
  //     axios.put('/api/profile/new/', this.state.newUser)
  //     console.log('axios post to user id ',res.data._id)
  //     console.log('data posted to user is ',this.state)
  //     this.props.history.push('/profile/show/')
  //   })
  //   .then(res => {
  //     console.log('axois put = ',res)
  //   })



  render() {
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">Your Profile</h2>
          <ProfileForm
            profileData={this.state.profileData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default ProfileNew