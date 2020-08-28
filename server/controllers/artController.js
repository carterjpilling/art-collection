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
  }
}