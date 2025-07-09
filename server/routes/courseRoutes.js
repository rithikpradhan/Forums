import express from "express";
import Course from "../models/Course.js";
import authenticateUser from "../middleware/authMiddleware.js";

const router = express.Router();

// Create course

router.post('/',authenticateUser, async(req,res) =>{

    try {

        const user = req.user;

        if(!["teacher", "admin", "superadmin"].includes(user.role)){

            return res.status(403).json({ error: "You are not authorized to create a course"});

        }

        const {title, description} = req.body;

        const course = new Course({
            title,
            description,
            createdBy: user._id,
            studentsEnrolled: [],

        });

        await course.save();

        res.status(201).json(course);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


// Get all courses

router.get('/', authenticateUser, async(req, res) => {
    try {
        const user = req.user;

        let courses;

        if(user.role === "student"){

            //show only courses the student is enrolled in 
            courses = await Course.find({ studentsEnrolled: user._id })
        } else{
            // show all courses
            courses = await Course.find();
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error"});
        
    }
})

// Enroll student to course

router.post('/enroll', authenticateUser, async(req, res)=>{
    try {

        const user = req.user;

        if(!["teacher", "admin", "superadmin"].includes(user.role)){
            return res.status(403).json({ error: "You are not authorized to enroll a student"});
        }

        const {courseId, studentId} = req.body;

        const course = await Course.findById(courseId);

        if(!course) {
            return res.status(404).json( { error: "Course not found"});

        }

        //if student is already enrolled

        if(course.studentsEnrolled.includes(studentId)){
            return res.status(400).json({ error: "Student is already enrolled"});
        }

        course.studentsEnrolled.push(studentId);

        await course.save();

        res.json({ message: "Student enrolled successfully", course});
        
    } catch (err) {

        console.error(err);
        res.status(500).json({ error: "Server error"});
        
    }
})


export default router;