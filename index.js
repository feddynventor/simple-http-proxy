var request = require('request').defaults({jar: true});
var cors = require('cors')
var express = require('express')

var app = express()

app.use(cors())

const port = process.argv[2]
const endpoint = process.argv[3]

app.post('*', require('body-parser').json(), (req, res) => {
    console.log("POST", new Date().toISOString(), endpoint+req.originalUrl, req.body)

    request({
        url: endpoint+(req.originalUrl),
        method: 'POST',
        body: JSON.stringify(req.body),
    }, 
    function (error, response, body) {
        if (response.statusCode == 200) {
            res.send(body)
        } else {
            console.log(body)
            res.status(response.statusCode).send(body)
        }
    })

})

app.get('*', (req, res) => {
    console.log("GET", new Date().toISOString(), endpoint+req.originalUrl)
    
    request({
        url: endpoint+(req.originalUrl),
        method: 'GET',
    }, 
    function (error, response, body) {
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
