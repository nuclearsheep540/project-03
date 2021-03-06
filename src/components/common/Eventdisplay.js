import React from 'react'
import axios from 'axios'
// import ReactDOM from 'react-dom'


class Eventdisplay extends React.Component {

  constructor() {
    super()

    this.state = {
      events: []
    }
  }


  componentDidMount() {
    const apiKey = process.env.NEWS_API_KEY
    axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=${apiKey}`)
      .then(res => this.setState({ events: [ ...res.data.articles ] }))
      .catch(err => console.log(err))
  }


  render() {
    // const event = this.state.events
    console.log(this.state.events)
    if (!this.state.events) return null
    console.log('this state events=',this.state.events)
    return (
      <div className='center'>
        
        <div className='center1'>
  
          {this.state.events.map((elem, i) => <div className='input-area news' key={i}><a target="_blank " href={elem.url}><p className='indexP'><img className='avatar' /> {elem.title}</p></a></div>)}

        </div>
        
      </div>


    )
  }





}



export default Eventdisplay

