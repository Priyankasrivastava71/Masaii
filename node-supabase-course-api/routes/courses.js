const express = require("express");
const supabase = require("../supabaseClient");
const logger = require("../middleware/logger");
const validateEnrollment = require("../middleware/validateEnrollment");

const router = express.Router();

router.get("/all-courses", logger, async(req,res)=>{
    const {data, error } = await supabase 
    .from("courses")
    .select("*");
    if(error) return 
    res.status(500).json(error);
    res.json(data);
});

router.post("/enroll", logger, validateEnrollment, async (req, res)=>{
    const {student_name, course_id} = req.body;
    const {data, error} = await supabase
    .from("enrollments")
    .insert([{student_name, course_id}]);
    if(error) return 
    res.status(500).json(error);
    res.json({
        message: "Student enrolled successfully",data
    });
});

router.get("/courses/:id/enrollments", async (req, res)=>{
    const courseId = req.params.id;
    const {data, error} = await supabase 
    .from("enrollments")
    .select("student_name, course_id")
    .eq("course_id", courseId);
    if(error) return
    res.status(500).json(error);
    res.json(data);
});

module.exports = router;