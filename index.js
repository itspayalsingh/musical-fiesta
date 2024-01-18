const express=require("express")
const app= express()
var ip = require('ip');
const dns= require("dns")
const fs=require("fs")
// var ipLocation = require('ip-location')
app.use(express.json()) 
 

//  dns.lookup("https://stormy-tan-fossa.cyclic.app/",(err,ans)=>{
//     console.log(ans);
//  })

//  const dns = require('dns');
//  const url = require('url');
 
//  let hostname = url.parse("https://stormy-tan-fossa.cyclic.app/").hostname;
 
// let hostname = url.parse("https://www.cyclic.sh/").hostname;
//  dns.lookup(hostname, (err, address, family) => {
//    console.log('address: %j family: IPv%s', address, family);
//  });
 
app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('IP Address of the client is: ', ip);
  fs.appendFileSync("./ans.txt",ip)
  res.send('Hello World!',ip);
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