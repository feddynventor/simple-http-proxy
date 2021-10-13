var request = require('request');
var cors = require('cors')
var express = require('express')
var app = express()

app.use(cors())

const port = 3000

app.get('*', (req, res) => {
    
    request('https://www.lefrecce.it/msite/api/'+req.originalUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body)
            res.send(body)
        }
    })

})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
