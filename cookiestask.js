const express = require('express');
const cookieParser = require ("cookie-parser")

const app = express()
const port = 4001

app.use(cookieParser())

app.get("/set_cookie",(req,res) => {
    res.cookie("username","Jhon Doe",{maxAge:3600000})
    res.send('Set a cookie')
})
app.get("/get_cookie",(req,res) =>{
  const username = req.cookies.username
  if (username) {
    res.send(`User name is : ${username}`)
  }else{
    res.send("No username cookie found")
  }
})
app.listen(port, () =>{
    console.log("Server running on port : ",port)
    
})