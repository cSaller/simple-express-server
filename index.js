const express = require('express')
const morgan = require('morgan')

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  const envs = process.env
  Object.keys(envs).forEach(key => {
    if (key.startsWith('AWS')) {
      delete envs[key]
    }
  })
  res.json(envs)
})

app.listen(port, () => { console.info(`listening on http://localhost:${port}`) })
