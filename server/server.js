const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const {connectDb} = require('./db/connect')
const {createUser , loginUser , logoutUser} = require('./functions/functions')
const {isAuthenticated} = require('./middlewares/auth')
const server = express()


server.use(express.json())
server.use(cookieParser())

server.get('/',(req,res)=>{
    res.send("hello world")
})
server.post('/api/signUp',createUser)
server.post('/api/login',loginUser)
server.get('/tokenTest',isAuthenticated,(req,res)=>{ // testing route
    res.send('hello')
})
server.post('/api/logout',logoutUser)
server.post('/api/logout',logoutUser)


connectDb(process.env.MONGO_URI)
server.listen(process.env.PORT,()=>{
    console.log(`server connected successfully at port ${process.env.PORT}`)
})