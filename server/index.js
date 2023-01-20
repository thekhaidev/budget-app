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
  const userRef = db.collection('users').doc('kim');
  const user = await userRef.get();
  const accounts = await userRef.collection('accounts');
  const checking = await accounts.doc('checking').collection('transactions').get();
  const savings = await accounts.doc('savings').collection('transactions').get();

  savings.forEach((trans) => {
    console.log(trans.id, '=>', trans.data());
  });

  res.send(accounts);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
