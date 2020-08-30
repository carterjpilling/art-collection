import React from 'react'
import ArtPost from './ArtPost'
import CommentForm from './CommentForm'

const DisplayCollection = (props) => {
  return <div className="DisplayCollection">
    {props.artCollection.map(element => {
      return <ArtPost
        key={element.id}
        data={element}
      />
    })}
    {props.comments.map(element => {
      return <CommentForm
        key={element.id}
        data={element}
        addComment={props.addComent}
      />
    })}
    {/* DisplayCollection.js */}
  </div>
}

export default DisplayCollection