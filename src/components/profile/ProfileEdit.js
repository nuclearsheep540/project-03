import React from 'react'
import Form from './Form'
import axios from 'axios'
import Auth from '../../lib/auth'

class ProfileEdit extends React.Component {
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
        languages: [],
        frameworks: [],
        qualifications: ''
      }
   
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handleFramework = this.handleFramework.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const userProfile = { ...this.state.userProfile, [name]: value }
    this.setState({ userProfile })
  }

  handleLanguage(selected) {
    console.log('language',selected.map(sel => sel.value))
    const languages = selected ?  selected.map(item => item.value) : [''] 
    const langs = [ ...languages ]
    this.setState({ userProfile: { ...this.state.userProfile, languages: langs } })
  }

  handleFramework(selected){
    console.log('framework',selected.map(sel => sel.value))
    const frameworks = selected ? selected.map(item => item.value) : ['']
    console.log('frameworks accumulating =',frameworks)
    const frames = [ ...frameworks ]
    this.setState({ userProfile: { ...this.state.userProfile, frameworks: frames } })
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
    if (!this.state.userProfile) return null
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">Your Profile</h2>
          <Form
            userProfile={this.state.userProfile}
            handleLanguage={this.handleLanguage}
            handleFramework={this.handleFramework}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default ProfileEdit