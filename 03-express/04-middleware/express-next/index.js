
require("dotenv").config();
//  import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// import module headers
const Headers= require('./middleware/header');
// import module body
const header = require('./middleware/header');
const body = require('./middleware/body');

// instantiate express
const app = express();


// middleware  body-parser json
app.use(bodyParser.json(),(req,res, next )=>{
    console.log(req.params)
});

// // middleware pertama yakni body-parser
// // middleware kedua menampilkan headers dari request
// app.use(bodyParser.json(), header);

// // middleware hanya berlaku pada method post di index /
// // tampilkan ini dari request body menggunakan middleware body
// //  tampilkan data request body ke client
// app.post("/", bodyParser.urlencoded,body ,(req,res,next)=>{
//     // kirim data req.body ke client menggunakan req.send
//     res.send(req.body);
// });

// //  middleware untuk selain method post di index/
// app.use("/", (req,res,next)=>{
//     res.send(req.headers);
// })

// // port 
// app.listen(process.env.PORT, ()=>{
//     console.log(`server berjalan di port ${process.env.PORT}`);
// })