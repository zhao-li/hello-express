const express = require('express');

const app = express();
const port = 3000;

const greetings = require('./greetings/routes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello from express");
});

app.use('/greetings/', greetings);

app.listen(port, () => console.log(
  `hello-express listening at http://localhost:${port}`)
)
