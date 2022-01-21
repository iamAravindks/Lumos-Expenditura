import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken"
import config from "../config";
import User from "../models/userModel";

export const isAuth = expressAsyncHandler(async (req, res,next) =>
{
    const bearerToken = req.headers.authorization
    if (bearerToken && bearerToken.startsWith('Bearer'))
    {
       try {
         const token = bearerToken.split(" ")[1];
         const decodedObj = jwt.verify(token, config.JWT_SECRET);
        req.user = await User.findById(decodedObj.id).select("-password")
         next();
       } catch (error) {
           res.status(401)
           throw new Error("Not authorized , token validation failed")
       }
    }
    if (!bearerToken)
    {
        res.status(401).json({message : "Not authorized,no token"})
    }
})