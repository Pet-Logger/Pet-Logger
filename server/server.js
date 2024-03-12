const path = require('path');
const express = require('express');
const petLoggerRouter = require('./routers/petLoggerRouter');

const app = express();
const PORT = 3000;

// parsing requests to json
app.use(express.json());
// define the route handlers
app.use('/api', petLoggerRouter);

app.use(express.static(path.resolve(__dirname, '../dist')));

// Unknown route handler here
app.use('*', (req, res) => {
  console.log('This is 404');
  res.sendStatus(404);
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error from middleware',
    status: 500,
    message: { err: 'ERROR!!!' },
  };

  const errorObj = Object.assign({}, defaultErr, err);

  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}: http://localhost:${PORT}/`);
});

module.exports = app;
