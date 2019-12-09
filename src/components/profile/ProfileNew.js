import React from 'react'
import Form from './Form'
import axios from 'axios'
import Auth from '../../lib/auth'

class ProfileNew extends React.Component {
  constructor() {
    super()

    this.state = {
      obj: {},
      frameString: [],
      langString: [],
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
      { value: 'Javascript', label: 'Javascript' },
      { value: 'C#', label: 'C#' },
      { value: 'Python', label: 'Python' },
      { value: 'Java', label: 'Java' },
      { value: 'Rust', label: 'Rust' },
      { value: 'go', label: 'Go' },
      { value: 'elixr', label: 'Elixr' },
      { value: 'ruby', label: 'Ruby' },
      { value: 'Kotlin', label: 'Kotlin' },
      { value: 'Typescript', label: 'Typescript' },
      { value: 'C++', label: 'C++' },
      { value: 'PHP', label: 'PHP' },
      { value: 'CSS', label: 'CSS' }
    ],
    this.frameworks = [
      { value: 'Angular', label: 'Angular' },
      { value: 'Django', label: 'Django' },
      { value: 'Ruby On Rails', label: 'Ruby On Rails' },
      { value: 'ASP.net', label: 'ASP.net' },
      { value: 'Meteor', label: 'Meteor' },
      { value: 'Flask', label: 'Flask' },
      { value: 'ReactJS', label: 'ReactJS' },
      { value: 'Phoenix', label: 'Phoenix' },
      { value: 'Spring', label: 'Spring' },
      { value: 'Play', label: 'Play' },
      { value: 'Express', label: 'Express' },
      { value: 'Vue.js', label: 'Vue.js' },
      { value: 'CakePHP', label: 'CakePHP' },
      { value: 'Bootstrap', label: 'Bootstrap' },
      { value: 'Bulma', label: 'Bulma' }
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
    this.location = [
      { value: 'Edinburgh', label: 'Edinburgh' },
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
    this.handleUpdateFrames = this.handleUpdateFrames.bind(this)
    this.handleUpdateLangs = this.handleUpdateLangs.bind(this)


  }
  // componentDidMount(){
  //   axios.get('/api/login', {
  //     headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //   })
  //     .then(res => this.setState({ user: res.data }))
  //     .then(console.log('ProfileNew state response', this.state))
  // }

  handleChange({ target: { name, value } }) {
    const userProfile = { ...this.state.userProfile, [name]: value }
    this.setState({ userProfile })
  }

  handleLanguage(selected) {
    const languages = selected
    const userProfile = { ...this.state.userProfile, languages }
    this.setState({ userProfile })
  }
  handleFramework(selected) {
    const frameworks = selected
    const userProfile = { ...this.state.userProfile, frameworks }
    this.setState({ userProfile })
  }
  handleAvatar(selected) {
    const avatar = selected
    const userProfile = { ...this.state.userProfile, image: avatar }
    this.setState({ userProfile })
  }
  handleIndustry(selected) {
    console.log('industry is now', selected)
    const industries = selected
    const userProfile = { ...this.state.userProfile, fieldIndustry: industries }
    this.setState({ userProfile })
  }
  handleCity(selected) {
    // const location = selected ? selected.map(item => item.value) : []
    const location = selected
    const userProfile = { ...this.state.userProfile, location }
    this.setState({ userProfile })
  }




  handleUpdateLangs(e) {
    e.preventDefault()
    this.setState({
      ...this.state, langString: this.state.userProfile.languages.map(lang => {
        delete lang.label
        return lang
      })
    })

    this.setState({
      ...this.state.userProfile, langString: this.state.userProfile.languages.map(lang => (
        Object.values(lang)[0])
      )
    })
  
    setTimeout(() => {
      this.handleUpdateFrames()
    }, 100)
  }

  handleUpdateFrames() {
    this.setState({
      ...this.state, frameString: this.state.userProfile.frameworks.map(frame => {
        delete frame.label
        return frame
      })
    })
    this.setState({
      ...this.state.userProfile, frameString: this.state.userProfile.frameworks.map(frame => (
        Object.values(frame)[0])
      )
    })

    setTimeout(() => {
      this.handleSubmit()
    }, 100)
  }



  
  handleSubmit() {

    this.setState({
      obj: {
        firstName: this.state.userProfile.firstName,
        lastName: this.state.userProfile.lastName,
        image: this.state.userProfile.image.value,
        age: this.state.userProfile.age,
        location: this.state.userProfile.location.value,
        fieldIndustry: this.state.userProfile.fieldIndustry.value,
        languages: this.state.langString,
        frameworks: this.state.frameString,
        qualifications: this.state.userProfile.qualifications
      }
    }) 

    axios.post('/api/profile', this.state.obj, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        console.log('profile updated:', res.data)
        this.notNew()
        this.props.history.push('/profile/show')
      })
  }
  notNew(){
    const userId = this.props.match
    console.log('userId =',userId)
    axios.put('/api/login', this.state.user, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log('notnew res=',res))
  }

  render() {
    if (!this.state.userProfile) return null
    console.log(this.state.userProfile, 'userp')
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">Your Profile</h2>
          <Form
            langOptions={this.languages}
            frameOptions={this.frameworks}
            avatarOptions={this.avatars}
            indieOptions={this.industries}
            cityOptions={this.location}
            userProfile={this.state.userProfile}
            handleLanguage={this.handleLanguage}
            handleFramework={this.handleFramework}
            handleAvatar={this.handleAvatar}
            handleCity={this.handleCity}
            handleChange={this.handleChange}
            handleIndustry={this.handleIndustry}
            handleSubmit={this.handleSubmit}
            update={this.handleUpdateLangs}
          />
        </div>
      </section>
    )
  }
}

export default ProfileNew