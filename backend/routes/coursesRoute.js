// modules
const express = require ('express');
const {
  getAllCourses,
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require ('../controllers/coursesController');

// router
const router = express.Router ();

// get all courses
router.get ('/', getAllCourses);

// add course
router.post ('/new', addCourse);

// get course
router.get ('/:id', getCourse);

// update course
router.patch ('/:id', updateCourse);

// delete course
router.delete ('/:id', deleteCourse);

// exports
module.exports = router;
