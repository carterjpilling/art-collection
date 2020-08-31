import React, { Component } from 'react'
import CommentForm from './CommentForm'

class MessageBoard extends Component {
  constructor() {
    super()

    this.state = {
      display: false
    }
    this.handleCommentSlide = this.handleCommentSlide.bind(this)
  }
  // const { name, comments } = props.data
  handleCommentSlide() {
    this.setState({
      display: !this.state.display
    })
  }
  render() {


    // console.log(this.state.display)
    return (
      < div className={this.state.display ? 'hide-message-button' : "message-board-controller"} >
        <button
          className={this.state.display ? "hide-submit-button" : "open-message-board-button"}
          onClick={this.handleCommentSlide}
        >
          Open Message Board</button>
        <div className="message-form">

        </div>

        <div className={this.state.display ? "message-board" : "comments-hidden"}>
          <button onClick={this.handleCommentSlide} className="close-messages">Close</button>
          {this.props.commentsArray.map(element => {
            return (
              <div className="comments-displayed">

                <p className='commentor-name'>{element.name}: </p>
                <p> </p>
                <p className="commentor-comments" >{element.comments}</p>
                <button onClick={() => this.props.deleteComment(element.id)} className="delete-comment">Delete</button>
                {/* <button onCLick={(comments) => this.props.editComment(element.comments)}
                  className="edit-comment">Edit</button> */}
              </div>
            )
          })}


          <CommentForm
            addComments={this.props.addComments}
          />
        </div>
      </ div >
    )
  }
}

export default MessageBoard

