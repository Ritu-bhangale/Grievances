const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    CollegeEmmail:{
        type:String,
        required:[true,"please enter a valid Email"],
        unique:true
    },
    Password:{
        type:String,
        required:true,
    },
    
})