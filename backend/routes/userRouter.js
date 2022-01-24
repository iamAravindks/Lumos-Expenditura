import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../middlewares/authMiddleware";
import User from '../models/userModel'
import generateToken from '../utils/generateToken'
const userRouter = express.Router()

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public 
userRouter.post('/login', expressAsyncHandler(async (req, res) =>
{
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password)))
    {
        res.json({
            _id: user._id,
            email: user.email,
            token:generateToken(user._id)
        })
    } else
    {
      res.status(401).json({ message: "invalid password or email" })
        }
}))

// @desc get user profile
// @route GET /profile
// @access private

userRouter.get('/profile',isAuth, expressAsyncHandler(async (req, res) =>
{
    const user = await User.findById(req.user.id)
    if (user)
    {
        res.json({
          _id: user._id,
          email: user.email,
        });
    } else
    {
        res.status(404)
        throw new Error("User not found")
        }
}))


// @desc Register a new user
// @route POST /api/users
// @access Public 

userRouter.post("/", expressAsyncHandler(async (req, res) =>
{
  try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
          res.status(400).json({ message: "User already exists" });
        }
        const user = await User.create({
          name,
          email,
          password,
        });

        if (user) {
          res.status(201).json({
            data: {
              _id: user._id,
              name: user.name,
              email: user.email,
              token: generateToken(user._id),
            },
          });
        } else {
          res.status(400).json({ message: "Registration failed" });
        }
  } catch (error) {
      res.status(500).json({message:error.message})
  }
}))


export default userRouter
