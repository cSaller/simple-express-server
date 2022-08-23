const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  const envs = process.env
  Object.keys(envs).forEach(key => {
    if (key.startsWith('AWS')) {
      delete envs[key]
    }
  })
  res.json(envs)
})

app.listen(process.env.PORT, () => { console.info(`listening on port ${process.env.PORT}`) })
