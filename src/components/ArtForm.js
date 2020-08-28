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
    }
    this.handleChange = this.handleChange.bind(this)
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
  }


  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} className="art-form">
          <input placeholder="Title" onChange={this.handleChange} name="title" />
          <input placeholder="Artist" onChange={this.handleChange} name="artist" />
          <input placeholder="Year Made" onChange={this.handleChange} name="year" />
          <input placeholder="Art Image URL " onChange={this.handleChange} name="artImg" />
          <input placeholder="Give description of Art Here" onChange={this.handleChange} name="artDescription" />

          <button type='submit'>Submit Art to the Collection</button>
        </form>
      </div>
    )
  }
}
export default ArtForm