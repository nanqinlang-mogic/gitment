const app = require('express')()
const request = require('request')
const bodyParser = require('body-parser')
const upload = require('multer')()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Content-Type', 'application/json')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('*', upload.array(), (req, res) => {
  request.post({
    url: 'https://github.com/login/oauth/access_token',
    form: req.body,
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'oauth-service',
    },
  }, (error, r, body) => {
    if (!error) {
      res.send(body)
    } else {
      res.json({ error })
    }
  })
})

const port = process.env.PORT || 9000
app.listen(port, () => console.log(`oauth-service listening on port ${port}`))
