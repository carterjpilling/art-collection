const express = require('express')
const app = express()
const artCtrl = require('./controllers/artController')
const commentCtrl = require('./controllers/commentController')

const SERVER_PORT = 4044

app.use(express.json())
// console.log(artCtrl)
//* Art Endpoints
app.get('/api/artData', artCtrl.getAllArt)
app.post('/api/artData', artCtrl.addArt)

//* Comment Endpoints
app.get('/api/commentsData', commentCtrl.getComments)
app.post('/api/commentsData/:id', commentCtrl.addComments)
app.delete('/api/commentsData/:id', commentCtrl.deleteComment)
app.put('/api/commentsData/:id', commentCtrl.editComment)


app.listen(SERVER_PORT, () => {
  console.log(`All Cylinders Firing on ${SERVER_PORT}`)
})

