// modules
import axios from "axios";

// main url
const url = "http://localhost:5000/api";

// get all courses
export const getAllCourses = () => axios.get(`${url}/courses`);
