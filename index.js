const express = require('express');

const db = require('./app/db');
const router = require('./app/routes/routes');
const dbUrl = require('./dbUrl');

const app = express();

db.connect(dbUrl, err => {
  if (err) console.log(err);
  else app.use('/', router).listen(3000);
});
