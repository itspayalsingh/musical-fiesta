const express=require("express")
const app= express()

app.get("/",(req,res)=>{
    console.log("ip",req.ip);
    res.send("nth",req.ip)
})


app.listen(5050,()=>{
    console.log("server is runnign on 5050");
})