var quoteRouter =('/Routes/quoteRouter.js');
var express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const quoteModel = require('./db/quoteModel');
var app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`listening on ${port}`);
});



app.get('/',(req,res)=>{
  res.json({
    message:'Sock DB of Quotes!!!!'
  });
});

app.get('/quotes',(req,res)=>{
    quoteModel.getAll().then((quotes)=>{
      res.json(quotes)
    } )
});
app.post('/quotes',(req,res)=>{
  console.log(req.body);
  quoteModel.create(req.body).then((quote)=>{
    res.json(quote);
  }).catch((error)=> {
    res.status(500);
    res.json(error);
  })
})
