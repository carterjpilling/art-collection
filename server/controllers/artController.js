const artData = require('./data.json')

let id = artData.length + 1
module.exports = {
  getAllArt: (req, res) => {
    res.status(200).send(artData)
  },

  addArt: (req, res) => {
    const { title, artist, year, artImg, artDescription } = req.body
    const newArt = {
      id: id,
      title,
      artist,
      year,
      artImg,
      comments: " ",
      artDescription,
    }
    artData.push(newArt)
    id++
    res.status(200).send(artData)
  },
  editArt: (req, res) => {
    const { id } = req.params
    const { title, artist, year, artImg, artDescription } = req.body

    const index = artData.findIndex((element) => element.id === +id)

    if (index === -1) {
      return res.status(404).send('Post not found')
    }

    let existingPost = artData[index]
    // console.log(existingPost)
    const modifiedArtPost = {
      id: existingPost.id,
      title: title || existingPost.title,
      artist: artist || existingPost.artist,
      year: year || existingPost.year,
      artImg: artImg || existingPost.artImg,
      comments: existingPost.comments,
      artDescription: existingPost.artDescription
    }
    console.log(modifiedArtPost)
    artData[index] = modifiedArtPost

    res.status(200).send(artData)
  },
}