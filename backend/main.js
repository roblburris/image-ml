const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('Request received')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
