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


  handleDelete() {
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

  handleComment(e) {
    e.preventDefault()
    const requestId = this.state.requestData._id
    axios.post(`/api/requests/${requestId}/comments`, { text: this.state.text }, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => this.setState({ comments: res.data.comments, text: '' }))
      .then(this.getApi)
      .then(document.getElementById('mainInput').reset())
      .catch(err => console.log(err))
  }

  deleteComment(e) {
    // WE NEED TO PROGRAM DELETE COMMENT SO IT CAN ONLY DELETE COMMENTS OWNED BY WHO IS LOGGED IN
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
            <h2 className="title">Request #{this.state.requestData._id}</h2>

            <div className=''>
              <Link to={'/requests'}><h5 className='button backToResultsButton'>Back to results</h5></Link>
              {this.isOwner() &&
                <>
                  <Link to={`/requests/${this.state.requestData._id}/edit`}><button>Edit</button></Link>
                  <button onClick={this.handleDelete}>Delete</button>
                </>
              }
            </div>

           
            <h3>{this.state.requestData.title}</h3>
            <div className='input-area container-full'>
              
              <p className='indexP'>Framework: {this.state.requestData.frameworks}</p>
              <p>Language: {this.state.requestData.languages}</p>
              <p>Description:<p>{this.state.requestData.description}</p></p>
              <p><Link to={`/profile/show/${this.state.requestData.user._id}`}>Post written by: {this.state.requestData.user.username}</Link></p>
  
              <p>{this.state.requestData.user.createdAt}</p>
            </div>

          </div>
          <div className="container">
            <h3>Comments</h3>
            {this.state.requestData.comments[0] &&
              this.state.requestData.comments.map(comment => (
                <div key={comment._id} className='input-area'>
                  <p><Link to={`/profile/show/${comment.user._id}`}><strong>{comment.user.image}{comment.user.firstName} {comment.user.lastName} </strong> </Link> says: {comment.text}
                    <button className='deleteButton' onClick={this.deleteComment} name={comment._id}>delete comment</button>
                  </p>
                </div>
              ))
            }
            <form id='mainInput' className='container'>
              <label name="exampleMessage">Add your comment here</label>
              <input id="mainInput" className="input-area" placeholder="Give your input here" name="commentBox" onChange={this.getComment}></input>
              <button type='submit' className='commentButton' onClick={this.handleComment}></button>
            </form>

          </div>


        </section>
      </div>
    )
  }
}

export default RequestShow