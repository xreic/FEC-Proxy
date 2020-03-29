const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.static(path.join(__dirname, '../client/dist')));

// Search bar queries
server.post('/api/searchbar/', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/searchbar', req.body)
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history retrieval
server.get('/api/searchbar/history', (req, res) => {
  axios
    .get('http://18.222.13.152:3100/api/searchbar/history')
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history insertion
server.post('/api/searchbar/history', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/searchbar/history', req.body)
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
});

// Search bar history clearing
server.delete('/api/searchbar/history', (req, res) => {
  axios
    .delete('http://18.222.13.152:3100/api/searchbar/history')
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
});

// Category items retrieval
server.post('/api/navbar/', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/navbar/', req.body)
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
});

// Login authentication
server.post('/api/login/', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/login/', req.body)
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
});

// Cart items retrieval
server.post('/api/cart/', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/cart/', req.body)
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
});

// Body item retrieval
server.get('/item/:id', (req, res) => {
  axios
    .get(`http://localhost:3002/item/${req.params.id}`)
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => console.error(err));
});

// Prevent random requests
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) res.status(400).send(err).end(); });
});


server.listen(port, () => console.log('Server initialized on port:', port));
