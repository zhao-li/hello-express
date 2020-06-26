const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/greetings/', (req, res) => {
  res.send("greetings, world");
});

app.listen(port, () => console.log(
  `hello-express listening at http://localhost:${port}`)
)
