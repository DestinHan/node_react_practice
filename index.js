// index.js
const express = require('express')
const app = express()
const port = 1122

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://DestinHan:70714530hoon%40@cluster0.tyudykg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser:true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('Error:', err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
