const express = require('express')
const dotenv = require('dotenv').config()
const {connectDb} = require('./db/connect')
const server = express()

server.get('/',(req,res)=>{
    res.send("hello world")
})


connectDb(process.env.MONGO_URI)
server.listen(process.env.PORT,()=>{
    console.log(`server connected successfully at port ${process.env.PORT}`)
})