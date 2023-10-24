const express = require("express")
const app = express()

app.get("/user",(req,res)=>{
    res.send("welcome to jungle")
})

app.listen(8000,()=>{
    console.log("server is running")
})