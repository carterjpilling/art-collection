import React from 'react'
import ArtPost from './ArtPost'

const DisplayCollection = (props) => {
  return <div className="DisplayCollection">
    {props.artCollection.map(element => {
      return <ArtPost
        key={element.id}
        data={element}
        editArt={props.editArt}
      />
    })}
  </div>
}

export default DisplayCollection