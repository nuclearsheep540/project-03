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
        image: [],
        age: '',
        location: [],
        fieldIndustry: [],
        languages: [],
        frameworks: [],
        qualifications: ''
        
      }
    }
    this.languages = [
      { name: 'languages', value: 'Javascript', label: 'Javascript' },
      { name: 'languages', value: 'C#', label: 'C#' },
      { name: 'languages', value: 'Python', label: 'Python' },
      { name: 'languages', value: 'Java', label: 'Java' },
      { name: 'languages', value: 'Rust', label: 'Rust' },
      { name: 'languages', value: 'go', label: 'Go' },
      { name: 'languages', value: 'elixr', label: 'Elixr' },
      { name: 'languages', value: 'ruby', label: 'Ruby' },
      { name: 'languages', value: 'Kotlin', label: 'Kotlin' },
      { name: 'languages', value: 'Typescript', label: 'Typescript' },
      { name: 'languages', value: 'C++', label: 'C++' },
      { name: 'languages', value: 'PHP', label: 'PHP' },
      { name: 'languages', value: 'CSS', label: 'CSS' }
    ],
    this.frameworks = [
      { name: 'frameworks', value: 'Angular', label: 'Angular' },
      { name: 'frameworks', value: 'Django', label: 'Django' },
      { name: 'frameworks', value: 'Ruby On Rails', label: 'Ruby On Rails' },
      { name: 'frameworks', value: 'ASP.net', label: 'ASP.net' },
      { name: 'frameworks', value: 'Meteor', label: 'Meteor' },
      { name: 'frameworks', value: 'Flask', label: 'Flask' },
      { name: 'frameworks', value: 'ReactJS', label: 'ReactJS' },
      { name: 'frameworks', value: 'Phoenix', label: 'Phoenix' },
      { name: 'frameworks', value: 'Spring', label: 'Spring' },
      { name: 'frameworks', value: 'Play', label: 'Play' },
      { name: 'frameworks', value: 'Express', label: 'Express' },
      { name: 'frameworks', value: 'Vue.js', label: 'Vue.js' },
      { name: 'frameworks', value: 'CakePHP', label: 'CakePHP' },
      { name: 'frameworks', value: 'Bootstrap', label: 'Bootstrap' },
      { name: 'frameworks', value: 'Bulma', label: 'Bulma' }
    ],
    this.avatars = [
      { name: 'man1', value: 'https://i.ibb.co/YksZLhK/man-1.png', label: 'man1' },
      { name: 'man2', value: 'https://i.ibb.co/GxCXTkp/man-2.png', label: 'man2' },
      { name: 'woman2', value: 'https://i.ibb.co/xhZkJXG/man-3.png', label: 'woman2' },
      { name: 'woman1', value: 'https://i.ibb.co/CvBLqBn/man-4.png', label: 'woman1' },
      { name: 'man', value: 'https://i.ibb.co/XbLnf5G/man.png', label: 'man' },
      { name: 'girl', value: 'https://i.ibb.co/JFh9Vmc/girl.png', label: 'girl' },
      { name: 'girl1', value: 'https://i.ibb.co/746XyPn/girl-1.png', label: 'girl1' },
      { name: 'boy1', value: 'https://i.ibb.co/n0cy8CT/boy-1.png', label: 'boy1' },
      { name: 'boy', value: 'https://i.ibb.co/18vGfWw/boy.png', label: 'boy' }
    ],
    this.industries = [
      { value: 'Fintech', label: 'FinTech' },
      { value: 'Software', label: 'Software' },
      { value: 'Web', label: 'Web' },
      { value: 'Charity', label: 'Charity' },
      { value: 'Design', label: 'Design' },
      { value: 'Health', label: 'Health' },
      { value: 'Legal', label: 'Legal' },
      { value: 'Security', label: 'Security' },
      { value: 'Media', label: 'Media' },
      { value: 'Education', label: 'Education' },
      { value: 'Transport and Logistics', label: 'Transport & Logistics' }
    ]
    this.cities = [
      { value: 'Bath', label: 'Bath' },
      { value: 'Birmingham', label: 'Birmingham' },
      { value: 'Bradford', label: 'Bradford' },
      { value: 'Brighton & hove', label: 'Brighton & Hove' },
      { value: 'Bristol', label: 'Bristol' },
      { value: 'Cambridge', label: 'Cambridge' },
      { value: 'Canterbury', label: 'Canterbury' },
      { value: 'Carlisle', label: 'Carlisle' },
      { value: 'Chelmsford', label: 'Chelmsford' },
      { value: 'Chester', label: 'Chester' },
      { value: 'Chichester', label: 'Chichester' },
      { value: 'Coventry', label: 'Coventry' },
      { value: 'Derby', label: 'Derby' },
      { value: 'Durham', label: 'Durham' },
      { value: 'Ely', label: 'Ely' },
      { value: 'Exeter', label: 'Exeter' },
      { value: 'Gloucester', label: 'Gloucester' },
      { value: 'Hereford', label: 'Hereford' },
      { value: 'Kingston-upon-Hull', label: 'Kingston-upon-Hull' },
      { value: 'Lancaster', label: 'Lancaster' },
      { value: 'Leeds', label: 'Leeds' },
      { value: 'Leicester', label: 'Leicester' },
      { value: 'Lichfield', label: 'Lichfield' },
      { value: 'Lincoln', label: 'Lincoln' },
      { value: 'Liverpool', label: 'Liverpool' },
      { value: 'London', label: 'London' },
      { value: 'Manchester', label: 'Manchester' },
      { value: 'Newcastle-Upon-Thames', label: 'Newcastle-Upon-Thames' },
      { value: 'Norwich', label: 'Norwich' },
      { value: 'Nottingham', label: 'Nottingham' },
      { value: 'Oxford', label: 'Oxford' },
      { value: 'Peterborough', label: 'Peterborough' },
      { value: 'Plymouth', label: 'Plymouth' },
      { value: 'Portsmouth', label: 'Portsmouth' },
      { value: 'Preston', label: 'Preston' },
      { value: 'Ripon', label: 'Ripon' },
      { value: 'Salisbury', label: 'Salisbury' },
      { value: 'Sheffield', label: 'Sheffield' },
      { value: 'Southampton', label: 'Southampton' },
      { value: 'St. Albans', label: 'St. Albans' },
      { value: 'Stoke-on-Trent', label: 'Stoke-on-Trent' },
      { value: 'Sunderland', label: 'Sunderland' },
      { value: 'Truro', label: 'Truro' },
      { value: 'wakefield', label: 'Wakefield' },
      { value: 'wells', label: 'Wells' },
      { value: 'winchester', label: 'Winchester' },
      { value: 'wolverhampton', label: 'Wolverhampton' },
      { value: 'worcester', label: 'Worcester' },
      { value: 'york', label: 'York' }
    ]
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handleFramework = this.handleFramework.bind(this)
    this.handleAvatar = this.handleAvatar.bind(this)
    this.handleIndustry = this.handleIndustry.bind(this)
    this.handleCity = this.handleCity.bind(this)
  }
  componentDidMount() {
    // const userId = Auth.getPayLoad().sub
    axios.get('/api/profile/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        const resCopy = { ...res.data }
        resCopy.frameworks = resCopy.frameworks.map(elem => {
          return { value: elem, label: elem } //turn everything that's a string, into an object
        })
        resCopy.languages = resCopy.languages.map(elem => {
          return { value: elem, label: elem }
        })
        resCopy.location = resCopy.location.map(elem => {
          return { value: elem, label: elem }
        })
        resCopy.fieldIndustry = resCopy.fieldIndustry.map(elem => {
          return { value: elem, label: elem }
        })
        this.setState({ userProfile: resCopy.userProfile })
      })
      .catch(err => console.log(err))
  }
  handleChange({ target: { name, value } }) {
    const userProfile = { ...this.state.userProfile, [name]: value }
    this.setState({ userProfile })
  }

  handleLanguage(selected) {
    const languages = selected ? selected.map(item => item.value) : ['']
    const userProfile = { ...this.state.userProfile, languages }
    this.setState({ userProfile })
  }
  handleFramework(selected) {
    const frameworks = selected ? selected.map(item => item.value) : ['']
    const userProfile = { ...this.state.userProfile, frameworks }
    this.setState({ userProfile })
  }
  handleAvatar(selected) {
    const avatar = selected
    const userProfile = { ...this.state.userProfile, image: avatar }
    this.setState({ userProfile })
  }
  handleIndustry(selected) {
    const industries = selected 
    const userProfile = { ...this.state.userProfile, fieldIndustry: industries }
    this.setState({ userProfile })
  }
  handleCity(selected) {
    const cities = selected
    const userProfile = { ...this.state.userProfile, location: cities }
    this.setState({ userProfile })
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log('props are ', this.props)
    const userId = Auth.getPayLoad().sub
    const obj = {
      firstName: this.state.userProfile.firstName,
      lastName: this.state.userProfile.lastName,
      image: [this.state.userProfile.image.value],
      age: this.state.userProfile.age,
      location: [this.state.userProfile.location.value],
      fieldIndustry: [this.state.userProfile.fieldIndustry.value],
      languages: this.state.userProfile.languages,
      frameworks: this.state.userProfile.frameworks,
      qualifications: this.state.userProfile.qualifications
    }
    console.log('updating profile with: ', this.state.userProfile)
    axios.put(`/api/profile/${userId}/edit`, obj , {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        console.log('response updated:', res.data)
        this.setState({ userProfile: res.data })
        this.props.history.push('/profile/show')
      })
  }
  render() {
    if (!this.state.userProfile) return null
    console.log(this.state.userProfile, 'data profile')
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">Update Your Profile</h2>
          <Form
            langOptions={this.languages}
            frameOptions={this.frameworks}
            avatarOptions={this.avatars}
            indieOptions={this.industries}
            cityOptions={this.cities}
            userProfile={this.state.userProfile}
            handleLanguage={this.handleLanguage}
            handleFramework={this.handleFramework}
            handleAvatar={this.handleAvatar}
            handleCity={this.handleCity}
            handleChange={this.handleChange}
            handleIndustry={this.handleIndustry}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}
export default ProfileEdit