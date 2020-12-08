const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env' : '.env',
  });

  console.log('me lembre')
}

const { MONGO_URL, APP_URL } = require('./config/consts');

const routes = require('./routes');

const corsOptions = {
  origin: APP_URL || undefined,
};

class App {
  constructor() {
    this.express = express();
    this._middlewares();
    this._database();
    this._routes();
  }

  _middlewares() {
    this.express.use(express.json());
    this.express.use(cors(corsOptions));
  }

  _database() {
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  _routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
