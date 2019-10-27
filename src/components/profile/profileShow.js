import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

export default class ProfileShow extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      user: {},
      mine: []
    }
    //binds
  }

  componentDidMount() { 
    console.log('fetching profile...')
    const userId = Auth.getPayLoad().sub
    console.log('userId = ', userId)
    axios.get(`/api/profile/show/${userId}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        // this.setState({ data: res.data })
        console.log('profile data recieved: ',res.data)
      })
    //   .catch(err => console.log(err))
  }
  
  // getPosts(){ //get the data in requests, and call 
  //   console.log('finding user posts...')
  //   axios.get('/api/requests')
  //     .then(res => {
  //       this.setState({ data: res.data })
  //       this.displayOwnership()
  //     })
  //     .catch(err => console.log(err))
  // }
  // displayOwnership() {
  //   const mine = this.state.user.filter(princess => {
  //     return Auth.getPayLoad().sub === princess.user._id
  //   })
  //   this.setState({ mine })
  //   // console.log('all princesses = ', myPrincesses)
  //   console.log('mine = ',this.state.mine)
  // }

  getApi() {
    // custom call for grabbing api data
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
    if (!this.state) return null
    const profile = this.state.data
    console.log('rendering profile...')
    return (
      <section className='section'>
        <div className='container'>
          <h2 className="title">{`Welcome back, ${Auth.getName()}`}</h2>
          <small>Member since {profile.createdAt}</small>
          <p>first name: {profile.firstName}</p>
          <p>last name: {profile.lastName}</p>
          <p>image: </p>
          <p>age: {profile.age}</p>
          <p>location: {profile.location}</p>
          <p>industry: {profile.fieldIndustry}</p>
          <p>skills: {!profile.skills ? '' : profile.skills.forEach((elem, i) => <p key={i}>{elem}</p>)}</p>
          <p>languages: {!profile.languages ? '' : profile.languages.forEach((elem, i) => <p key={i}>{elem}</p>)}</p>
          <p>frameworks: {!profile.frameworks ? '' : profile.frameworks.forEach((elem, i) => <p key={i}>{elem}</p>)}</p>
          <p>qualifications: {!profile.qualifications ? '' : profile.qualifications.forEach((elem, i) => <p key={i}>{elem}</p>)}</p>
        </div>
      </section>

    )
  }

}