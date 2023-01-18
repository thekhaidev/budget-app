const express = require('express');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// const axios = require('axios');
const cors = require('cors');
const serviceAccount = require('../b_key.json');

require('dotenv').config();

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// app.use(express.static("./client/dist"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('The server is up and running');
});

app.get('/test', async (req, res) => {
  const citiesRef = db.collection('users');
  const snapshot = await citiesRef.get();
  const users = [];
  snapshot.forEach((doc) => {
    users.push(doc.id, '=>', doc.data());
  });
  res.send(users);
});

// app.post('/test', async (req, res) => {
//   const docRef = db.collection('users').doc('alovelace');

//   await docRef.set({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   }).then(res.send('Collection posted'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
