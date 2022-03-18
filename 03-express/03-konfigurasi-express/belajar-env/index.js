//  require detenv
require('dotenv').config();

// import express 
const express = require ('express');

// intitiate express 
const app = express();

// Middleware disini
// middleware routing index method get
app.get("/", (req,res)=>{
    //jika port 5000 maka akan menapmpilkan pesan "production"
    // selainnya => "Development"
    if(process.env.PORT == 5000){
        res.send("server Production");
    }else{
        res.send("server Development")
    }
})

// listen to port 
app.listen(process.env.PORT, function (){
    console.log(`server berjalan di port ${process.env.PORT}`);

});