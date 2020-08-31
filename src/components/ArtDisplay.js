import React, { Component } from 'react'
import ArtForm from './ArtForm'
//this is the mapping guy vv
import DisplayCollection from './DisplayCollection'
import axios from 'axios'
import MessageBoard from './MessageBoard'

class ArtDisplay extends Component {
  constructor() {
    super()

    this.state = {
      artCollection: [],
      commentsArray: []
    }
    this.addArt = this.addArt.bind(this)
    this.addComments = this.addComments.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.editComment = this.editComment.bind(this)
    this.editArt = this.editArt.bind(this)
  }
  componentDidMount() {
    axios.get('/api/artData').then(res => {
      axios.get('/api/commentData',).then(commentRes => {
        this.setState({
          artCollection: res.data,
          commentsArray: commentRes.data
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
  editArt(id, title, artist, year, artImg, artDescription) {
    axios.put(`/api/artData/${id}`, { title, artist, year, artImg, artDescription }).then(res => {
      this.setState({
        artCollection: res.data
      })
    })
  }

  addComments(name, comments) {
    axios.post(`/api/commentData`, { name, comments }).then(res => {
      this.setState({
        commentsArray: res.data
      })
    })
  }
  deleteComment(id) {
    axios.delete(`/api/commentData/${id}`,).then(res => {
      this.setState({
        commentsArray: res.data,
      })
    })
  }
  editComment(id, comments) {
    axios.put(`/api/commentData?${id}`, { comments }).then((res) => {
      this.setState({
        commentsArray: res.data,
      })
    })
  }

  render() {
    console.log(this.commentsArray)
    return (
      <div>
        <DisplayCollection
          artCollection={this.state.artCollection}
          editArt={this.editArt}

        />
        <ArtForm
          addArt={this.addArt}
        />
        <MessageBoard
          deleteComment={this.deleteComment}
          commentsArray={this.state.commentsArray}
          addComments={this.addComments}
          editComment={this.editComment} />
        <div>{this.commentsArray}</div>
      </div>
    )
  }
}
export default ArtDisplay