const express = require('express');
const airoute = require('./route/ai.route');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/ai", airoute);

app.get('/', (req, res) => {
  res.send('Hello, World!!');
});


module.exports = app;