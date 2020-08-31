import React, { Component } from 'react'

class ArtForm extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      artist: "",
      year: "",
      artImg: "",
      comments: "",
      artDescription: "",

      display: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleArtSlide = this.handleArtSlide.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { title, artist, year, artImg, artDescription } = this.state
    this.props.addArt(title, artist, year, artImg, artDescription)
    this.setState({
      title: "",
      artist: "",
      year: "",
      artImg: "",
      comments: "",
      artDescription: "",
      display: false,
    })
  }

  handleArtSlide() {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    // console.log(this.state.display)
    return (
      <div className="artform-container">
        <button className={this.state.display ? 'hide-submit-button' : 'submit-art-button'} onClick={this.handleArtSlide}>Submit Art</button>
        <nav className="navbar">
          <div className={this.state.display ? 'artDropdown' : 'artHidden'}>
            <button onClick={this.handleArtSlide} className="close-button">Close</button>
            <form onSubmit={e => this.handleSubmit(e)} className="art-form">
              <input placeholder="Title" className="input-title" onChange={this.handleChange} name="title" value={this.state.title} />
              <input placeholder="Artist" onChange={this.handleChange} name="artist" value={this.state.artist} />
              <input placeholder="Year Made" onChange={this.handleChange} name="year" value={this.state.year} />
              <input placeholder="Art Image URL " onChange={this.handleChange} name="artImg" value={this.state.artImg} />
              {/* <input placeholder="Give description of Art Here" onChange={this.handleChange} className="input-description" name="artDescription" value={this.state.artDescription} /> */}
              <button type='submit'  >Submit Art to the Collection</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}
export default ArtForm