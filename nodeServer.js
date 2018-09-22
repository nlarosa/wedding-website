#!/usr/bin/env nodejs
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const nano = require('nano')('http://localhost:5984');
const app = express()

const prayersDB = nano.db.use('prayers');
const rsvpsDB = nano.db.use('rsvps');

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

app.put('/rsvp/', (req, res) => {
  if (req.body.name || req.body.guests.length) {
    rsvpsDB.insert(
      Object.assign(req.body, { time: new Date(Date.now()).toLocaleString() })
    )
    .then((body) => {
      res.sendStatus(200)
    });
  }
});

app.listen(8443, () => console.log('Listening on port 8443!'))
