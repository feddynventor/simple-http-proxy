var request = require('request');
var cors = require('cors')
var express = require('express')
var app = express()

app.use(cors())

const port = process.argv[2]
const endpoint = process.argv[3]

app.get('*', (req, res) => {
    
    request(endpoint+req.originalUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(new Date().toISOString(),endpoint+req.originalUrl)
            res.send(body)
        }
    })

})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
