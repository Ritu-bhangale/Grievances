const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const isAuthenticated = async(req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(400).json({
            success:false,
            msg:"token not found"
        })
    }

    const tokenVal = jwt.verify(req.cookies.token,process.env.JWT_SECRET)
    // console.log("token   ",tokenVal)
    
    req.user = await userModel.findById(tokenVal.id)
    console.log(req.user)
    next()
}

module.exports = {
    isAuthenticated
}