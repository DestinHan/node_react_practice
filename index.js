const express = require('express')
const app = express()
const port = 1122

const bodyParser = require('body-parser')

const { User } = require("./models/User")

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://DestinHan:70714530hoon%40@cluster0.tyudykg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser:true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('Error:', err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  // information for new user signup from client
  // put into database
  
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true})
  })

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
