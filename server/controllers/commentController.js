const artData = require('./data.json')

module.exports = {
  getComments: (req, res) => {
    res.status(200).send(artData)
  },
  addComments: (req, res) => {
    const { id } = req.params
    const { comments } = req.body

    const index = artData.findIndex((element) => element.id === +id)

    if (index === -1) {
      return res.status(404).send('User not found')
    }

    const existingPost = artData[index]

    const modifiedArtPost = {
      id: existingPost.id,
      title: existingPost.title,
      artist: existingPost.artist,
      year: existingPost.year,
      artImg: existingPost.artImg,
      comments: comments || existingPost.comments,
      artDescription: existingPost.artDescription
    }
    artData[index] = modifiedArtPost

    res.status(200).send(artData)
  },
  deleteComment: (req, res) => {
    const { id } = req.params

    const index = artData.findIndex((element) => element.id === +id)

    if (index === -1) {
      return res.status(404).send('User not found.')
    }
    artData[index].comments = " "
    res.status(200).send(artData)
  },
  editComment: (req, res) => {
    const { id } = req.params
    const { newComment } = req.body

    const index = artData.findIndex((element) => element.id === +id)

    if (index === -1) {
      return res.status(404).send('User not found.')
    }
    artData[index].comments = newComment
    res.status(200).send(artData)
  },
}
