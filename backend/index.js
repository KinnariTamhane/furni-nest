const express = require("express");
const app = express();
const port = 5001;

const connection  = require('./config/dbconnection');

app.use(express.json());
app.use('/', require('./routes/router'))

connection();

app.listen(port,()=>{
    console.log('Connection Established..')
});