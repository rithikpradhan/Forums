import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);


// Database connection

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));

//test route

app.get("/",(req,res)=>{
    res.send("API is working");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));