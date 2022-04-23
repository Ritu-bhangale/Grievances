const mongoose = require('mongoose')
const grievancesSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        require:true
    },
    type:{
        type:String,
        enum:['maintenance','sports Equipments','complaint','mess','faculty','other'],
        default:'other'
    },
    description:{
        type:String,
        required:true
    },
    forwardedTo:{
        type:String,
        ref:'users',
        default:'not yet assigned'
    },
    status:{
        type:String,
        enum:['requested','assigned','completed','verified'],
        default:'requested'
    }
})

module.exports = mongoose.model('grievances',grievancesSchema)
