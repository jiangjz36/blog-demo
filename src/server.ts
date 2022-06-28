// const mongoose = require('mongoose')
// const express = require('express')
// const bodyParser = require('body-parser')
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import userRouter from './router/users'
import { HOST, PORT, DB } from './config'

mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log('已连接到数据库。。。');

    const app = express();

    app.use(bodyParser.json());
    app.use(express.static('static'));

    app.use('/api/users', userRouter)

    // app.use(serverRender);

    app.listen(PORT, () => [
      console.log(`App listening on ${HOST}:${PORT}`)
    ])
  }
)
