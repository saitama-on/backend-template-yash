import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler.js"
import apiError from "../utils/apiError.js"
import { User } from "../models/user.model.js"


const verifyJWT = asyncHandler(async(req , res , next ) =>{

    try {
        const token = (req.cookies && req.cookies.accessToken ) ||
        req.header("Authorization")?.replace("Bearer" , "")
    
        if(!token){
            throw new apiError(400 , "unauthorized request")
        }
    
    
        const decodedInfo = await jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedInfo?._id).
        select("-password -refreshToken")

        console.log("this uyser is loging out " , user);
        
    
        if(!user){
            throw new apiError(401 , "invalid token!!")
        }
    
    
        req.user = user
        next()
    } 
    catch (error) 
    {
        throw new apiError(401 , error?.message || "Invalid Access Token")
    }

})


export {verifyJWT}