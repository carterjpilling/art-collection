import React from 'react'
import CommentForm from './CommentForm'

const MessageBoard = (props) => {
  // const { name, comments } = props.data
  console.log(props.comments)
  return (
    <div className="message-board-controller">
      <div className="message-form">
        {props.comments.map(element => {
          return (
            <CommentForm />
          )
        })}

      </div>



      <div className="message-board">

        <p>{props.comments.name}</p>
        <p>{props.comments.comments}</p>
        John
      </div>

    </div>
  )
}


export default MessageBoard