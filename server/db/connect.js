const mongoose = require('mongoose')

const connectDb = async (connectionStr) =>{
    return await mongoose.connect(connectionStr ,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(console.log("database connected suuccessfully !!")).catch((err)=>{
        console.log(err);
    })
}


module.exports = {connectDb}