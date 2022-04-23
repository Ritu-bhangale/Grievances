const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    collegeEmail:{
        type:String,
        required:[true,"please enter a valid Email"],
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    roles:{
        type:String,
        enum:['user','admin','superAdmin','staff'],
        default:"user"
    },
    
})


userSchema.methods.createJwt =  function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:'5h'
    })
}

module.exports = mongoose.model('user',userSchema)