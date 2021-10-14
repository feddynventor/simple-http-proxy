var request = require('request').defaults({jar: true});
var cors = require('cors')
var express = require('express')

var app = express()

app.use(cors())

const port = process.argv[2]
const endpoint = process.argv[3]

app.get('*', (req, res) => {
    console.log(new Date().toISOString(), req.session, endpoint+req.originalUrl)
    
    request(endpoint+req.originalUrl, function (error, response, body) {
        if (response.statusCode == 200) {
            res.send(body)
        } else {
            console.log(body)
            res.status(response.statusCode).send(body)
        }
    })

})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
