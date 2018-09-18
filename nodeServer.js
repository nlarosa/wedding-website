#!/usr/bin/env nodejs
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const nano = require('nano')('http://localhost:5984');
const app = express()

const prayersDB = nano.db.use('prayers');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.put('/prayer/', (req, res) => {
  if (req.body.prayer) {
    prayersDB.insert({
      prayer: req.body.prayer,
      name: req.body.name || 'Anonymous',
      time: new Date(Date.now()).toLocaleString()
    })
    .then((body) => {
      res.sendStatus(200)
    });
  }
});

app.listen(8443, () => console.log('Example app listening on port 8443!'))
