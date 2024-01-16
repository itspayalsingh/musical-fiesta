const express=require("express")
const app= express()

app.get("/",(req,res)=>{
    console.log(req.ip);
    res.send("nth")
})


app.listen(9090,()=>{
    console.log("server is runnign on 9090");
})