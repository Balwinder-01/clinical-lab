const express = require('express');
const mysql = require('mysql');

const app = express(); 
// basjhbfhjSWBD

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});


db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connected.....')
});

app.get('/createdatabase', (req,res) =>{
  let sql='CREATE DATABASE CLINICAL_LAB';
  db.query(sql,(err,result)=>{
    if(err){
      res.sendStatus(400)
      console.log(err)
    }
    console.log(result)
    res.send('created....')
  });
});

  app.get('/', (req, res) => {
    res.send('<h1>hi ballu</h1>');
  });


module.exports = db


app.listen('2000', () => {
  console.log('server online....');
});