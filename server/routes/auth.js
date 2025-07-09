import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();


//register route

router.post('/register', async(req,res)=>{
    const {name, email, password, role} = req.body;

    const exists = await User.findOne({email});
    if(exists) return res.status(400).json({ error:"Email already exists"});

    const hashed = await bcrypt.hash(password,10);

    const user = new User({
        name,
        email,
        password: hashed,
        role: role || 'student', // default role
    });

    await user.save();

    res.json({ message: "User registered successfully" });
});


//login route
router.post('/login', async(req,res)=>{
    const {email, password}= req.body;

    const user = await User.findOne({email});
    if(!user) return res.status(400).json({ error:"User not found"});

    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(400).json({ error:"Invalid Credentials"});


    const token = jwt.sign(
        {id:user._id, role: user.role},
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    );

    res.json({
        token,
        user:{id: user._id, name: user.name, email: user.email, role: user.role}
    });
});


export default router;