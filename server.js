
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.use(express.static(`${__dirname}/client`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '35994f3a99784ba785820cececfeab5a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/lab.html')
// })

// app.get('/css', (req, res) => {
//     res.sendFile(__dirname + "/lab.css")
// })

// app.get('/js', (req, res) => {
//     res.sendFile(__dirname + "/lab.js")
// })

app.listen(4000, () => {
    console.log(`app listening on port 4000`)
});