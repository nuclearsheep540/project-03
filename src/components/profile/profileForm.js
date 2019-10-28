import React from 'react'
import axios from 'axios'
import Select from 'react-select'

class ProfileForm extends React.Component {
  constructor() {
    super()

    this.state = {

      formData: {
        frameworks: [''],
        languages: ['']
      },

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


  
      languages: [
        { value: 'javascript', label: 'Javascript' },
        { value: 'C#', label: 'C#' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'rust', label: 'Rust' },
        { value: 'go', label: 'Go' },
        { value: 'elixr', label: 'Elixr' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'kotlin', label: 'Kotlin' },
        { value: 'typescript', label: 'Typescript' },
        { value: 'C++', label: 'C++' },
        { value: 'php', label: 'PHP' },
        { value: 'css', label: 'CSS' }
      ],
      frameworks: [
        { value: 'angular', label: 'Angular' },
        { value: 'django', label: 'Django' },
        { value: 'ruby on rails', label: 'Ruby On Rails' },
        { value: 'asp.net', label: 'ASP.net' },
        { value: 'meteor', label: 'Meteor' },
        { value: 'flask', label: 'Flask' },
        { value: 'reactjs', label: 'ReactJS' },
        { value: 'phoenix', label: 'Phoenix' },
        { value: 'spring', label: 'Spring' },
        { value: 'play', label: 'Play' },
        { value: 'express', label: 'Express' },
        { value: 'vuejs', label: 'Vue.js' },
        { value: 'cakephp', label: 'CakePHP' },
        { value: 'bootstrap', label: 'Bootstrap' },
        { value: 'bulma', label: 'Bulma' }
      ]
    }
    
    this.handleMultiSelect = this.handleMultiSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleMultiSelect(selected) {
  
    if (!selected) {
      return this.setState({ formData: { ...this.state.formData, languages: [], frameworks: [] } })
    }
    console.log('what the item input kicks out', selected)
    const frameWorkSelect = selected.map(item => item.value)
    const languagesSelect = selected.map(item => item.value)
    console.log('what i wnat to put in state', languagesSelect)
    console.log('what i wnat to put in state', frameWorkSelect)
    
    const formData = { ...this.state.formData, frameWorkSelect, languagesSelect }
    this.setState({ formData })
  }

  handleChange({ target: { name, value } }) {
    const profileData = { ...this.state.profileData, [name]: value }
    this.setState({ profileData })
  }

  handleSubmit(e, res) {
    e.preventDefault()
    console.log('submitted')
    axios.post('/api/profile/new')
    .then(res => this.setState({ profileData: res.data }))
    .catch(err => console.log(err))
  }


  render() {
    console.log(this.state.profileData)
    return (
      <div>
        <section className="section">

          <form onSubmit={this.handleSubmit}>

            <div className="wrapper-two">

              <div className="input-area">
                <label name="exampleRecipientInput" type='text'>First name</label>
                <input
                  className="u-full-width"
                  placeholder="First name"
                  type='text'
                  name='firstName'
                  value={this.state.profileData.firstName}
                  onChange={this.handleChange}
                >
                </input>
              </div>


              <div className="input-area">
                <label name="exampleRecipientInput" type='text'>Last name</label>
                <input
                  className="u-full-width"
                  placeholder="Last name"
                  type='text'
                  name='lastName'
                  value={this.state.profileData.lastName}
                  onChange={this.handleChange}
                >
                </input>
              </div>


              <div className="input-area">
                <label name="exampleRecipientInput" type='text'>Image</label>
                <input
                  className="u-full-width"
                  placeholder="Profile picture"
                  type='text'
                  name='image'
                >
                </input>
              </div>


              <div className="input-area">
                <label name="exampleRecipientInput" type='number'>Age</label>
                <input
                  className="u-full-width"
                  placeholder="Age"
                  type='number'
                  name='age'
                >
                </input>
              </div>


              <div className="input-area">
                <label name="exampleRecipientInput" type='text'>Location</label>
                <input
                  className="u-full-width"
                  placeholder="Location"
                  type='text'
                  name='location'
                >
                </input>
              </div>


              <div className="input-area">
                <label name="exampleRecipientInput" type='text'>Industry</label>
                <input
                  className="u-full-width"
                  placeholder="Industry"
                  type='text'
                  name='industry'
                >
                </input>
              </div>


              <div className="six columns">
                <label name="exampleRecipientInput">Languages</label>
                <div className="control">
                  <Select 
                    options={this.state.languages}
                    isMulti
                    onChange={this.handleMultiSelect}
                  />
                </div>
              </div>



              <div className="field">
                <label className="label">Framework</label>
                <div className="control">
                  <Select 
                    options={this.state.frameworks}
                    isMulti
                    onChange={this.handleMultiSelect}
                  />
                </div>
              </div>


              <div className="input-area">
                <label name="exampleRecipientInput" type='text'>If applicable, enter qualifications</label>
                <input
                  className="u-full-width"
                  placeholder="qualifications"
                  type='text'
                  name='qualifications'
                >
                </input>
              </div>
            </div>


            <button type='submit' className='center'>Submit</button>

          </form>
        </section>
      </div>
    )
  }
}
export default ProfileForm