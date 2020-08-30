import React from 'react'
import ArtPost from './ArtPost'
import MessageBoard from './MessageBoard'

const DisplayCollection = (props) => {
  return <div className="DisplayCollection">
    {props.artCollection.map(element => {
      return <ArtPost
        key={element.id}
        data={element}
      />
    })}
    {/* {props.comments.map(element => {
      return <MessageBoard
        key={element.id}
        data={element}
      />
    })} */}
    {/* DisplayCollection.js */}
  </div>
}

export default DisplayCollection