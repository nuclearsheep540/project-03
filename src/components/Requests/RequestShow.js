import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

// NEED TO ADD SECURE ROUTE FOR EDIT AND DELETE


class RequestShow extends React.Component {
  constructor() {
    super()
    this.state = {
      requestData: null,
      comments: null,
      user: '',
      text: ''
    }

    this.getApi = this.getApi.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.getComment = this.getComment.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)

  }

  componentDidMount() {
    const requestId = this.props.match.params.id
    axios.get(`/api/requests/${requestId}`)
      .then(res => {
        this.setState({ requestData: res.data, text: '' })
        this.setState({ comments: res.data.comments })  
      })  
      .catch(err => console.log(err))
  }
 

  getApi() {
    const princessId = this.props.match.params.id
    axios.get(`/api/requests/${princessId}`)
      .then(res => {
        // console.log('res from getApi',res)
        this.setState({ requestData: res.data })
        this.setState({ comments: res.data.comments })
      })
      .catch(err => console.log(err))
  }


  isOwner() {
    return this.state.requestData.user._id === Auth.getPayLoad().sub
  }

  
  handleDelete(){
    console.log('submitted')
    const princessId = this.props.match.params.id
    axios.delete((`/api/requests/${princessId}/`), {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/requests'))
      .catch(err => console.log(err))
  }

  getComment(e) {
    const textInput = e.target.value
    this.setState({ text: textInput })
  }

  handleComment() {
    // e.preventDefault()
    const requestId = this.state.requestData._id
    axios.post(`/api/requests/${requestId}/comments`, { text: this.state.text }, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => this.setState({ comments: res.data.comments, text: '' }))
      .catch(err => console.log(err))
  }

  deleteComment(e) {
    // console.log('before',this.state.comments)
    const commentId = e.target.name
    const requestId = this.props.match.params.id
    // console.log('comment id', commentId)
    // console.log('reqeust id', this.props.match)
    axios.delete(`/api/requests/${requestId}/comments/${commentId}`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(this.getApi)
      .catch(err => console.log(err))
  }
      
  render() {
    if (!this.state.requestData) return null
    if (!this.state.comments) return null
    // console.log(this.state.requestData.user._id, 'USER ID')
    console.log(this.state.requestData, 'state')
    console.log(Auth.getPayLoad().sub, 'person logged in')
    return (
      <div>
        <section className="section">
          <div className="container">
            <h2 className="title">REQUESTS SHOW PAGE</h2>
            <h3>{this.state.requestData.title}</h3>
            <p>{this.state.requestData.frameworks}</p>
            <p>{this.state.requestData.languages}</p>
            <p>{this.state.requestData.description}</p>
            <p>Post written by: {this.state.requestData.user.username}</p>
            <p>{this.state.requestData.user.createdAt}</p>

            {this.isOwner() &&
            <div className='container'>
              <Link to={`/requests/${this.state.requestData._id}/edit`}><button>Edit</button></Link>
              <button onClick={this.handleDelete}>Delete</button>
            </div>
            }

          </div>
          <div className="comment-box">
            <h3>Comments</h3>
            {this.state.requestData.comments[0] && 
              this.state.requestData.comments.map(comment => (
                <div key={comment._id}>
                  <p>{comment.user.firstName} {comment.user.lastName} says: {comment.text} <button onClick={this.deleteComment} name={comment._id}>Delete Comment</button></p> 
                </div>
              ))
            }
            <form id='mainInput'>
              <label name="exampleMessage">Add your comment here</label>
              <input id="mainInput" className="u-full-width" placeholder="Give your input here" name="commentBox" onChange={this.getComment}></input>
              <button type='submit' onClick={this.handleComment}>Add comment</button>
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

