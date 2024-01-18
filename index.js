const express=require("express")
const app= express()
var ip = require('ip');
const dns= require("dns")
const fs=require("fs")
var geoip = require('geoip-lite');
// var ipLocation = require('ip-location')
app.use(express.json()) 
 
 
 
 
app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  var geo = geoip.lookup(ip);
  console.log('IP Address of the client is: ', geo);
  // fs.appendFileSync("./ans.txt",ip)
  res.send(geo);
});





// let add=ip.address()
// // console.log(add);
// app.get("/",(req,res)=>{

//     // console.log("ip",req.ip);
//     res.send(add)
// })


app.listen(5050,()=>{
    console.log("server is runnign on 5050");
})