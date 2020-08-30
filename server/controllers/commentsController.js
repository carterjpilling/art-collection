const commentData = require('./commentData.json')

let id = commentData.length + 1


module.exports = {
  getComments: (req, res) => {
    res.status(200).send(commentData)
  },
  addComments: (req, res) => {
    const { name, comments } = req.body
    const newComment = {
      id: id,
      name,
      comments: comments,
    }
    commentData.push(newComment)
    id++
    res.status(200).send(commentData)
  },
  editComments: (req, res) => {
    console.log('hit')
    const { id } = req.params
    const { comments } = req.body

    const index = commentData.findIndex((element) => element.id === +id)

    if (index === -1) {
      return res.status(404).send('Comment not found.')
    }

    commentData[index].comments = comments

    res.status(200).send(commentData)
  },
  deleteComments: (req, res) => {
    const { id } = req.params

    const index = commentData.findIndex((element) => element.id === +id)

    if (index === -1) {
      return res.status(404).send('Comment not found.')
    }
    commentData.splice(index, 1)
    res.status(200).send(commentData)

  }
}