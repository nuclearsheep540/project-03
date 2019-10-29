import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

// NEED TO ADD SECURE ROUTE FOR EDIT AND DELETE


class RequestShow extends React.Component {
  constructor() {
    super()

    this.state = {
      requestData: [],
      user: '',
      text: '',
      comments: null
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/requests/${this.props.match.params.id}`)
      .then(res => this.setState({ requestData: res.data }))
      .then(res => this.setState({ comments: res.data.requestData.comments }))
      .catch(err => console.log(err))
  }

  

  // isOwner() {
  //   return Auth.getPayload().sub === this.state.requestData.user
  // }

  // AT THE MOMENT UNAUTHORIZED TO DELETE. NEED TO ADD A NEW REQUEST BUTTON / FILE
  // THEN IMPORT SHANI FORM TO THE EDIT AND NEW PAGES - TEST THEM 
  // SORT OUT ADDING COMMENTS IN FRONT END 
  // AND DELETING COMMENTS 

  handleDelete(e){
    console.log('submitted')
    const requestId = this.props.match.params.id
    axios.delete((`/api/requests/${requestId}`), {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/requests'))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({ text: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const requestId = this.state.requestData._id
    console.log('the ID is', requestId)
    axios.post(`/api/requests/${this.state.requestData._id}/comments`, { text: this.state.text }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        console.log(res.data)
        this.setState({ comments: res.data.requestData.comments, text: '' })
      })
      .catch(err => console.log(err))
  }
    
      
  render() {
    if (!this.state.requestData.user) return null
    if (!this.state.requestData.comments) return null
    console.log(this.state.requestData.comments, 'COMMENTS')
    return (
      <div>
        <section className="section">
          <div className="container">
            <h2 className="title">REQUESTS SHOW PAGE</h2>
            <h3>{this.state.requestData.title}</h3>
            <p>{this.state.requestData.framework}</p>
            <p>{this.state.requestData.language}</p>
            <p>{this.state.requestData.description}</p>
            <p>Post written by: {this.state.requestData.user.username}</p>
            <p>{this.state.requestData.user.createdAt}</p>
            <Link to={`/requests/${this.state.requestData._id}/edit`}><button>Edit</button></Link>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
          <div className="comment-box">
            <h3>Comments</h3>
            {this.state.requestData.comments[0] && 
              this.state.requestData.comments.map(comment => (
                <div key={comment._id}>
                  <p>{comment.user.username} says: {comment.text}</p>
                </div>
              ))
            }
            <form onSubmit={this.handleSubmit}>
              <label name="exampleMessage">Add your comment here</label>
              <textarea className="u-full-width" placeholder="Give your input here" name="commentBox" onChange={this.handleChange}></textarea>
              <button>Add comment</button>
            </form>

          </div>


        </section>    
      </div>
    )
  }
}

export default RequestShow



// {this.isOwner() &&
//   <>
//     <Link to={`/requests/${this.state.requestData._id}/edit`}>Edit</Link>
//     <button onClick={this.handleDelete}>Delete Request</button>
//   </>
// }

