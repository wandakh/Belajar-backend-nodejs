//  import express from 'express
const express = require('express');

// instantiate express
const app = express();

app.get('/', (req,res)=>{ 
    res.send('hello world ')
});

// rouing index : / menggunakan method get
app.get('/, helloworld')

// tentukan port dari server
app.listen(3000, () =>{
    console.log('server berjalan di port 3000')
}); 