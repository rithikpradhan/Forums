import jwt from "jsonwebtoken";

import User from "../models/User.js";

const authenticateUser = async (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")) {

            return res.status(401).json({ error: "No token provided" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");
        if(!user) {

            return res.status(401).json({ error: " User not found"});
        }

        req.user = user; 
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Token is invalid" });
        
    }
};

export default authenticateUser;