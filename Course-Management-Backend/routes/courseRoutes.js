const express = require('express')
const asyncHandler = require('express-async-handler')
const Course = require('../models/course')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

//Get All Courses
router.get('/', verifyToken, asyncHandler(async (req, res) => {
  const courses = await Course.find({})
  res.json(courses)
}))

//Get a Specific Course
router.get('/:id', verifyToken, asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)

  if (course) {
    return res.json(course)
  } else {
    res.status(404)
    throw new Error('Course Cannot Be Found')
  }
}))

//Add a New Course
router.post('/add', verifyToken, asyncHandler(async (req, res) => {

  const course = new Course({
    courseTitle: req.body.courseTitle,
    platform: req.body.platform,
    courseDescription: req.body.courseDescription,
    courseLink: req.body.courseLink,
    isCompleted: req.body.isCompleted
  });
  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
}))

//Update Specific Course
router.post('/update/:id', verifyToken, asyncHandler(async (req, res) => {

  const {
    courseTitle,
    platform,
    courseDescription,
    courseLink,
    isCompleted
  } = req.body;

  const course = await Course.findById(req.params.id);

  if (course) {
    course.courseTitle = courseTitle;
    course.platform = platform;
    course.courseDescription = courseDescription;
    course.courseLink = courseLink;
    course.isCompleted = isCompleted;

    const updatedCourse = await course.save();

    res.status(201).json(updatedCourse);
  } else {
    res.status(404);
    throw new Error("Course Not Found");
  }

}))

//Delete a Specific Course
router.delete('/delete/:id', asyncHandler(async (req, res) => {

  const course = await Course.findById(req.params.id);

  if (course) {
    await course.remove();
    res.json({ message: "Course Removed Successfully" });
  } else {
    res.status(404);
    throw new Error("Course not found");
  }
}))

module.exports = router