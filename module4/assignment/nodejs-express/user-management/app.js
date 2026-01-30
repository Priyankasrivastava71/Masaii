const express = require('express');
const routes = require('./src/routes/routes');
const errorMiddleware = require('./src/middlewares/error.middleware');

const app = express();
app.use(express.json());

app.use('/api/student ', routes);
app.use(errorMiddleware);

module.exports = app;