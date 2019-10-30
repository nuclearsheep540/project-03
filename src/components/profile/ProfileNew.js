import React from 'react'
import Form from './Form'
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
        languages: [],
        frameworks: [],
        qualifications: ''
      }
    }
    this.languages = [
      { name: 'languages', value: 'javascript', label: 'Javascript' },
      { name: 'languages', value: 'C#', label: 'C#' },
      { name: 'languages', value: 'python', label: 'Python' },
      { name: 'languages', value: 'java', label: 'Java' },
      { name: 'languages', value: 'rust', label: 'Rust' },
      { name: 'languages', value: 'go', label: 'Go' },
      { name: 'languages', value: 'elixr', label: 'Elixr' },
      { name: 'languages', value: 'ruby', label: 'Ruby' },
      { name: 'languages', value: 'kotlin', label: 'Kotlin' },
      { name: 'languages', value: 'typescript', label: 'Typescript' },
      { name: 'languages', value: 'C++', label: 'C++' },
      { name: 'languages', value: 'php', label: 'PHP' },
      { name: 'languages', value: 'css', label: 'CSS' }
    ],
    this.frameworks = [
      { name: 'frameworks', value: 'angular', label: 'Angular' },
      { name: 'frameworks', value: 'django', label: 'Django' },
      { name: 'frameworks', value: 'ruby on rails', label: 'Ruby On Rails' },
      { name: 'frameworks', value: 'asp.net', label: 'ASP.net' },
      { name: 'frameworks', value: 'meteor', label: 'Meteor' },
      { name: 'frameworks', value: 'flask', label: 'Flask' },
      { name: 'frameworks', value: 'reactjs', label: 'ReactJS' },
      { name: 'frameworks', value: 'phoenix', label: 'Phoenix' },
      { name: 'frameworks', value: 'spring', label: 'Spring' },
      { name: 'frameworks', value: 'play', label: 'Play' },
      { name: 'frameworks', value: 'express', label: 'Express' },
      { name: 'frameworks', value: 'vuejs', label: 'Vue.js' },
      { name: 'frameworks', value: 'cakephp', label: 'CakePHP' },
      { name: 'frameworks', value: 'bootstrap', label: 'Bootstrap' },
      { name: 'frameworks', value: 'bulma', label: 'Bulma' }
    ]

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
            langOptions={this.languages}
            frameOptions={this.frameworks}
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

export default ProfileNew