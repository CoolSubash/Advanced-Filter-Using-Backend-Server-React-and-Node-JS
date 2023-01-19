const express = require('express')
const app = express()
const port = 8000
const userdetail = require('./userdetail')
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  const { q } = req.query
  console.log(q)
  const keys = ['firstName', 'lastName', 'email']
  const filterdata = userdetail.filter((e) => {
    return keys.some((key) => e[key].toLowerCase().includes(q))
  })

  res.json(filterdata.slice(0, 10))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
