const express=require("express")
const app= express()
var ip = require('ip');
// var ipLocation = require('ip-location')
app.use(express.json()) 
 

 

let add=ip.address()
console.log(add);
app.get("/",(req,res)=>{
    // console.log("ip",req.ip);
    res.send(add)
})


app.listen(5050,()=>{
    console.log("server is runnign on 5050");
})