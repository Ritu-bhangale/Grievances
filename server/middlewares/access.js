const userModel = require("../models/userModel")

const isLoggedIn = (req,res,next)=>{
    if(!req.user){
        res.status(400).json({
            succes:false,
            msg:"user not logged in"
        })
    }
}

const isUser = (req,res,next)=>{
    if(req.user.roles == 'user'){
        next()
    }
    else {
        return res.status(500).json({
            succes:false,
            msg:"only users are allowed to see this page"
        })
    }
}
const isAdmin = (req,res,next)=>{
    if(req.user.roles == 'admin'){
        next()
    }
    else {
        return res.status(500).json({
            succes:false,
            msg:"only admins are allowed to see this page"
        })
    }
}
const isStaff = (req,res,next)=>{
    if(req.user.roles == 'staff'){
        next()
    }
    else {
        return res.status(500).json({
            succes:false,
            msg:"only staff are allowed to see this page"
        })
    }
}

module.exports = {
    isUser,
    isAdmin,
    isStaff,
    isLoggedIn
}