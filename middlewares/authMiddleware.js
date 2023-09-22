const jwt=require('jsonwebtoken')
const Station=require('../models/stationsModel')
const expressAsyncHandler=require('express-async-handler')
const generateToken=require('../config/generateToken')

const protect=expressAsyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1]
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            req.station=await Station.findById(decoded.id).select('-password')
            next()
        }catch(error){
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
}
)
module.exports={protect}