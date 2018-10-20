var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var quoteRouter =('/Routes/quoteRouter.js');
var express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();


app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.json({
    message:'Sock DB of Quotes!!!!'
  });
});
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`listening on ${port}`);
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
// app.use('/api/quotes',quoteRouter);