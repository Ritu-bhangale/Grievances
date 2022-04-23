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
    // console.log(user)

    res.status(201).json(user)
}

const loginUser = async(req,res)=>{
    if(req.user){
        return res.redirect('/')
    }
    const {email,password} = req.body 
    const user = await userModel.findOne({collegeEmail:email})
    if(!user){
        return res.status(400).json({
            msg:"user does not exists"
        })
    }
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
    
    res.clearCookie('token') // clear cookie
    res.send('logged out')
}

const issueFormPost = async(req,res)=>{
    const {type,description} = req.body
    const userId = req.user._id 

    const grievance = await grievancesModel.create({
        user:userId,
        type:type,
        description:description,
    })
    // console.log(grievance.user)
    res.status(201).json({
        success:true,
        grievance
    })
}

const showAllGrievances = async(req,res)=>{
    const grievances = await grievancesModel.find({}).populate('user')
    // console.log(grievances)
    res.status(200).json({
        success:true,
        grievances
    })
}

const sortGrievancesByType = async(req,res)=>{
    const allGrievances = await grievancesModel.find({})
    const requiredGrievances = []
    allGrievances.forEach((grievance)=>{
        if(grievance.type === req.params.type){
            requiredGrievances.push(grievance)
        }
    })

    // console.log(requiredGrievances)
    res.status(200).send({
        success:true,
        grievances:requiredGrievances
    })
}


const getUsersGrievance = async(req,res)=>{
    const allGrievances = await grievancesModel.find({}).populate('user')
    let requiredGrievances = []
    allGrievances.forEach((grievance)=>{
        // console.log("asdasdsadasd                       ----->        ", `new ObjectId("`+req.user._id+`")`) //why does grievance.user.id gives this format of data
        if(grievance.user.collegeEmail === req.user.collegeEmail){
            requiredGrievances.push(grievance)
        }
    })

    // console.log(requiredGrievances)
    res.status(200).send({
        success:true,
        grievances:requiredGrievances
    })
} 


const getUncompletedGrievances = async(req,res)=>{
    const allGrievances = await grievancesModel.find({}).populate('user')
    let requiredGrievances = []
    allGrievances.forEach((grievance)=>{
        // console.log(grievance.user._id)
        if(grievance.status !== 'completed'){
            requiredGrievances.push(grievance)
        }
    })

    // console.log(requiredGrievances)
    res.status(200).send({
        success:true,
        grievances:requiredGrievances
    })
}

const assignToStaff = async(req,res)=>{
    const {ForwardedTo} = req.body
    const grievance = await grievancesModel.findOneAndUpdate(
        {_id:req.params.id},
        {
            ForwardedTo:ForwardedTo,
            status:'assigned'
        })
    console.log(grievance)
    if(!grievance){
        return res.status(400).json({
            success:false,
            msg:"grievance not found"
        })
    }
}



module.exports = {
    createUser,
    loginUser,
    logoutUser,
    issueFormPost,
    showAllGrievances,
    sortGrievancesByType,
    getUsersGrievance,
    getUncompletedGrievances,
    assignToStaff
}