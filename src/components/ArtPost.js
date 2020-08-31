import React, { Component } from 'react'

class ArtPost extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      artist: "",
      year: "",
      artImg: "",

      display: false,
    }
    this.handleEditSlide = this.handleEditSlide.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit(e) {
    e.preventDefault()
    const { title, artist, year, artImg } = this.state
    this.props.editArt(this.props.data.id, title, artist, year, artImg)
    this.setState({
      title: "",
      artist: "",
      year: "",
      artImg: "",

      display: false,
    })
  }

  handleEditSlide() {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    console.log(this.state.display)

    const { title, artist, year, artImg } = this.props.data
    return (
      <div className="art-posts">
        <img src={artImg} alt={this.props.data.title} />
        <div className={this.state.display ? "hide-post-details" : "art-details-container"}>
          <p className="art-titles">{title}</p>
          <p>by: {artist}</p>
          <p className="post-year">{year}</p>
        </div>
        <form className={this.state.display ? "edit-form" : "hide-edit-form"} onSubmit={e => { this.handleSubmit(e) }}>
          <input
            placeholder="Title"
            onChange={this.handleChange}
            name="title"
            value={this.state.title}
          />
          <input
            placeholder="Artist"
            onChange={this.handleChange}
            name="artist"
            value={this.state.artist}
          />
          <input
            placeholder="Year"
            onChange={this.handleChange}
            name="year"
            value={this.state.year}
          />
          <input
            placeholder="Art Image"
            onChange={this.handleChange}
            name="artImg"
            value={this.state.artImg}
          />
          <button type='submit'>Submit Changes</button>
        </form>
        <button className={this.state.display ? "close-edit-button" : "hide-close-edit-button"} onClick={this.handleEditSlide}>Cancel Changes</button>
        {/* <p>Description{artDescription}</p> */}
        <div className="edit-container">

          <button
            className={this.state.display ? "hide-edit-button" : "edit-button"}
            onClick={this.handleEditSlide}
          >
            Edit</button>
        </div>
      </div >
    )
  }
}

export default ArtPost