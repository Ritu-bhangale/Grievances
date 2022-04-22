const mongoose = require('mongoose')
const grievancesSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
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
    }
})

module.exports = mongoose.model('grievances',grievancesSchema)
