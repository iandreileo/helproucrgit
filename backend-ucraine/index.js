const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const firebase = require('firebase');
var admin = require('firebase-admin');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;
const hostname = 'localhost';

var serviceAccount = require('./helproucr-firebase-adminsdk-8t0cq-7e2995adb0.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://helproucr-default-rtdb.firebaseio.com',
  });

const firebaseConfig = {

    apiKey: "AIzaSyAxw9eL3ymQrYWchErKxSvcrEleSFggC9s",
  
    authDomain: "helproucr.firebaseapp.com",
  
    projectId: "helproucr",
  
    storageBucket: "helproucr.appspot.com",
  
    messagingSenderId: "1055515300810",
  
    appId: "1:1055515300810:web:261a3b4e19338a83fbf533"
  
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase
  var db = firebase.database();

app.listen(port, () => {
    console.log(`Example app listening at http://${hostname}:${port}`);
  });
  

app.post('/add-request', function (req,res) {
    
    var userRef = db.ref("requests");

    console.log(req.body);

    const id = Date.now() + Math.floor(Math.random() * 765);

    const obj = {
        ...req.body,
        id: id,
    };

    db.ref(`requests/${id}`).set(obj, function(error) {
        if (error) {
          // The write failed...
          console.log("Failed with error: " + error)
        } else {
          // The write was successful...
          res.send({response: 'Success', id: id})
        }
    })
    
    

});

app.get('/get-requests', function (req,res) {
    db.ref('requests').once('value')
    .then(function(snapshot) {
        console.log( snapshot.val() )
        res.send(snapshot.val())

    })

});