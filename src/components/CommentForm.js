import React, { Component } from 'react'

class CommentForm extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      comments: "",
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
    const { name, comments } = this.state
    this.props.addComments(name, comments)
    this.setState({
      name: "",
      comments: "",
    })
  }

  render() {
    // console.log(props.commentsArray)
    return (
      <div className="commentform-container">

        <form onSubmit={e => { this.handleSubmit(e) }}>
          <input
            placeholder="Name"
            onChange={this.handleChange}
            name="name"
            value={this.state.name} />

          <input
            placeholder="Type Comments Here!"
            onChange={this.handleChange}
            name="comments"
            value={this.state.comments} />
          <button type='submit'>Add Comments</button>
        </form>

      </div>
    )
  }
}


export default CommentForm