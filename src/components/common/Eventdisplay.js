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
    axios
      .get('https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=ba5a6f180a9c4a0b93eabb14aa2946d7')
      .then(res => this.setState({ events: [res.data] }))
      .catch(err => console.log(err))
      
  }


  render() {
    const eventsId = this.state.events
    console.log(this.state.events)
    if (!this.state.events) return null
    return (
      <div>
        <h2>Events</h2>
        <div className="newscontainer">
          {this.state.events.map(event => (
            <div key={eventsId.articles}>
              <img src={event.content}></img>
              <h2 key={event.description}></h2>
              <p key={event.publishedAt}></p>
              {/* <p key={event.source.name}></p> */}
              <p key={event.title}></p>
              <p key={event.url}></p>
              <p key={event.urlToImage}></p>



            </div>
            
          ))}

        </div>

      </div>
      

    )
  }





}

 

export default Eventdisplay

