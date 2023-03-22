
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());


app.use(express.static(`${__dirname}/client`))

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