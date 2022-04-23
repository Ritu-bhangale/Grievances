const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const {connectDb} = require('./db/connect')
const {createUser , loginUser , logoutUser, issueFormPost, showAllGrievances, sortGrievancesByType, getUsersGrievance, getUncompletedGrievances, assignToStaff} = require('./functions/functions')
const {isAuthenticated} = require('./middlewares/auth')
const {isUser,isAdmin,isStaff} = require('./middlewares/access')
const server = express()


server.use(express.json())
server.use(cookieParser())

server.get('/',(req,res)=>{
    res.send("hello world")
})
server.post('/api/signUp',createUser)
server.post('/api/login',loginUser)
server.post('/api/submitRequest',isAuthenticated,isUser,issueFormPost)
server.get('/api/grievances',isAuthenticated,isAdmin,showAllGrievances)
server.get('/api/grievances/:type',isAuthenticated,isAdmin,sortGrievancesByType)
server.post('/api/logout',isAuthenticated,logoutUser)
server.get('/api/user/grievances',isAuthenticated,isUser,getUsersGrievance)
server.get('/api/grievances/uncompleted',isAuthenticated,isAdmin,getUncompletedGrievances)
server.get('/api/assign/:id',isAuthenticated,isAdmin,assignToStaff)


connectDb(process.env.MONGO_URI)
server.listen(process.env.PORT,()=>{
    console.log(`server connected successfully at port ${process.env.PORT}`)
})