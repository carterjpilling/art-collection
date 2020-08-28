import React from 'react'

const ArtPost = (props) => {

  const { title, artist, year, artImg, artDescription } = props.data
  return (
    <div className="art-posts">
      <img src={artImg} alt={props.data.title} />
      <p className="art-titles">{title}</p>
      <p>by: {artist}</p>
      <p>{year}</p>
      {/* <p>Description{artDescription}</p> */}
    </div >
  )

}

export default ArtPost