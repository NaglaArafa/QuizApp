const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000

const qs = require( './db' );
app.use(cors())

const  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array.slice(0, 10);
  }

app.get('/questions', (req, res) => {
  res.json(shuffleArray(qs))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})