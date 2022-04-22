const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')
const grievancesModel = require('../models/grievancesModel')
const createUser = async (req,res)=>{

    const {name,email,password,confirmPassword,role} = req.body
    if(password !== confirmPassword){
        return res.status(400).json({
            msg:"password did not matched"
        })
    }

    const Hashedpassword = await bcrypt.hash(password,10) 
    const user = await userModel.create({
        name:name,
        collegeEmail:email,
        password:Hashedpassword,
        roles:role
    })

    res.status(201).json(user)
}

const loginUser = async(req,res)=>{
    const {email,password} = req.body 
    const user = await userModel.findOne({collegeEmail:email})
    // console.log(user)
    const userPassword = user.password

    const isPasswordMatched = await bcrypt.compare(password,userPassword)
    if(!isPasswordMatched){
        return res.status(400).json({
            msg:"passsword did not matched"
        })
    }
    // console.log(user)
    const token = user.createJwt()
    // console.log("init   "  ,token)
    res.status(200).cookie('token',token,{
        httpOnly:true
    }).json({
        msg:"logged in"
    })
}

const logoutUser = (req,res)=>{
    // clear cookie
    res.clearCookie('token')
    res.send('logged out')
}

const issueFormPost = async(req,res)=>{
    const {name,email,description,type,room} = req.body
    
}

module.exports = {
    createUser,
    loginUser,
    logoutUser
}