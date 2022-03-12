// models
const Course = require ('../models/courseModel');

// controllers
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find ({});
    res.status (200).json ({success: true, data: courses});
  } catch (error) {
    res.status (404).json ({success: false, message: error.message});
  }
};

// add course
const addCourse = async (req, res) => {
  try {
    const newCourse = await Course.create (req.body);
    res.status (201).json ({
      success: true,
      data: newCourse,
      message: `${newCourse.name} course has been successfully added`,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
};

// get course
const getCourse = async (req, res) => {
  try {
    const course = await Course.findOne ({_id: req.params.id});
    res.status (200).json ({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status (404).json ({success: false, message: error.message});
  }
};

// update course
const updateCourse = async (req, res) => {
  try {
    const {body, params} = req;
    const filteredCourse = await Course.findOne ({_id: params.id});
    await Course.findByIdAndUpdate (params.id, body);
    res.status (201).json ({
      success: true,
      message: `${filteredCourse.name} course has been successfully updated`,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
};

// delete course
const deleteCourse = async (req, res) => {
  try {
    const {id} = req.params.id;
    const filterdCourse = await Course.findOne ({_id: id});
    await Course.findByIdAndDelete (id);
    res.status (201).json ({
      success: true,
      data: newCourse,
      message: `${filterdCourse.name} course has been deleted`,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
};

// exports
module.exports = {
  getAllCourses,
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
};
