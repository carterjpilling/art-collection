import React, { Component } from 'react'
import ArtForm from './ArtForm'
//this is the mapping guy vv
import DisplayCollection from './DisplayCollection'
import axios from 'axios'

class ArtDisplay extends Component {
  constructor() {
    super()

    this.state = {
      artCollection: [],
      comments: []
    }
    this.addArt = this.addArt.bind(this)
  }
  componentDidMount() {
    axios.get('/api/artData').then(res => {
      axios.get('/api/commentsData',).then(commentRes => {
        this.setState({
          artCollection: res.data,
          comments: commentRes.data
        })
      })
    })
  }

  addArt(title, artist, year, artImg, artDescription) {
    axios.post('/api/artData', { title, artist, year, artImg, artDescription }).then(res => {
      this.setState({
        artCollection: res.data
      })
    })
  }

  addComment(id, comments) {
    axios.post(`/api/commentsData?id=${id}`, { comments }).then(res => {
      this.setState({
        comments: res.data
      })
    })
  }
  deleteComment() { }
  editComment() { }

  render() {
    return (
      <div>
        <DisplayCollection
          artCollection={this.state.artCollection}
          comments={this.state.comments}
          addComment={this.addComment}
        />
        <ArtForm
          addArt={this.addArt} />
      </div>
    )
  }
}
export default ArtDisplay