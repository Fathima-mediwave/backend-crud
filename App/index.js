require('dotenv').config();
const express = require('express');
const config = require('./config');
const programRouter = require('./Routers/program.router');
const app = express();
app.use(express.json());
app.use('/programs', programRouter);
app.use((req, res, next) => {
  return res.status(404).send({
    message: 'not found',
  });
});
app.use((err, req, res, next) => {
  console.log(err);
  if (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
  return res.status(500).send({
    message: 'something went wrong',
  });
});

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});
