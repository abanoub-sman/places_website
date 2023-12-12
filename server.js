const express = require("express")
const app = express()

app.get("/",(req, res)=>{
    console.log("Here")
    res.sendStatus(201).send("Hi")
})

app.listen(3000)