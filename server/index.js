const express = require('express');
// eslint-disable-next-line import/no-unresolved
const { initializeApp, cert } = require('firebase-admin/app');
// eslint-disable-next-line import/no-unresolved
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
  // const user = await userRef.get();
  const accounts = userRef.collection('accounts');
  const accountList = await userRef.collection('accounts').listDocuments();

  // checking.forEach((doc) => {
  //   console.log(doc.id, '=>', doc.data());
  // });
  // need to get all accounts
  const test = accountList.reduce((acc, curr) => {
    acc.push(curr.id);
    return acc;
  }, []);

  // (console.log('test ', test));
  // need to get all transactions for accounts
  const resObj = {};
  const all = [];
  const getAccountTransactions = async () => {
    for (let i = 0; i < test.length; i++) {
      const currAcc = test[i];
      const accTrans = await accounts.doc(currAcc).collection('transactions').get();
      accTrans.forEach((acc) => {
        const { id } = acc;

        const data = acc.data();
        data.id = id;
        data.account = currAcc;

        // console.log(currAcc, '--> ', data);

        all.push(data);
        if (!resObj[currAcc]) {
          resObj[currAcc] = [data];

          // if () {
          //   // resObj[currAcc] = [emptyDataObj];
          //   console.log('help');
          // }
        } else {
          resObj[currAcc] = [...resObj[currAcc], data];
        }
        resObj.all = all;
        resObj.accounts = test;
      });
    }
    res.send(resObj).status(200);
  };
  // send back as single object/array

  // console.log('User', '=>', user.data());
  // console.log('User stuff -->', accountList);
  getAccountTransactions();
  // res.send(resObj);
});

app.post('/delete', async (req, res) => {
  const { account, id } = req.body;

  db.collection('users').doc('kim').collection('accounts').doc(account)
    .collection('transactions')
    .doc(id)
    .delete()
    .then(() => res.status(200).send('ID Deleted'));
});

app.post('/deleteaccount', async (req, res) => {
  const { account } = req.body;
  console.log(account);

  db.collection('users').doc('kim').collection('accounts').doc(account)
    .delete()
    .then(() => res.status(200).send('Account Deleted'));
});

app.post('/entry', async (req, res) => {
  const {
    type, amount, time, note, account,
  } = req.body;

  const entryObj = {
    type,
    amount,
    time,
    note,
  };

  db.collection('users').doc('kim').collection('accounts').doc(account)
    .collection('transactions')
    .add(entryObj)
    .then(() => res.status(200).send('Entry Added'));
});

// app.post('/account', async (req, res) => {
//   const { account } = req.body;
//   console.log(account);

//   db.collection('users').doc('kim').collection('accounts')
//     .doc(account)
//     .collection('transactions')
//     .add({
//       type: 'test',
//       amount: 16165,
//       note: 'test',
//       time: { _seconds: 16531616 },
//       isEmpty: true,
//     })
//     .then(() => res.status(200).send('Account Added'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
